import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {
  Article,
  ArticleSection,
  ArticleSummaryItem,
  ArticleTableOfContentItem,
  MobileImageMode,
} from '../../models/article.model';

import { ArticleService } from '../../services/article';
import { FileService } from '../../services/file';
import { ImageService } from '../../services/image';
import { ToastService } from '../../services/toast.service';

import { Spinner } from '../../components/common/spinner/spinner';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [FormsModule, Spinner],
  templateUrl: './article-edit.html',
  styleUrl: './article-edit.scss',
})
export class ArticleEdit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly articleService = inject(ArticleService);

  private readonly fileService = inject(FileService);

  private readonly imageService = inject(ImageService);

  private readonly toastService = inject(ToastService);

  readonly articleId = this.route.snapshot.paramMap.get('id');

  readonly isNewArticle = this.articleId === null;

  readonly article = signal<Article>({
    id: crypto.randomUUID(),
    publicationDate: '',
    name: '',
    image: '',
    path: '',
    lead: '',
    summaryItems: [],
    tableOfContentItems: [],
    sections: [],
  });

  readonly isLoading = signal(!this.isNewArticle);

  readonly isSaving = signal(false);

  readonly isUploadingMainImage = signal(false);

  readonly uploadingSectionImages = signal<Set<string>>(new Set());

  readonly uploadedImageKeys = signal<Set<string>>(new Set());

  constructor() {
    if (this.articleId) {
      this.articleService.getArticleById(this.articleId).subscribe({
        next: (article) => {
          this.article.set(article);
          this.isLoading.set(false);
        },
        error: (error) => {
          this.isLoading.set(false);

          console.error('Failed to load article', error);

          if (error.status === 404) {
            this.toastService.error('Nie znaleziono artykułu.');

            this.router.navigate(['/dashboard']);
            return;
          }

          if (error.status === 0) {
            this.toastService.error('Nie udało się połączyć z serwerem.');
            return;
          }

          this.toastService.error('Nie udało się wczytać artykułu.');
        },
      });
    }
  }

  saveArticle(): void {
    if (this.isUploadingMainImage() || this.uploadingSectionImages().size > 0) {
      this.toastService.warning('Poczekaj na zakończenie wysyłania obrazów.');
      return;
    }

    if (this.isSaving()) {
      return;
    }

    const articleToSave = this.article();

    if (!articleToSave.name.trim()) {
      this.toastService.warning('Uzupełnij tytuł artykułu.');
      return;
    }

    if (!articleToSave.lead.trim()) {
      this.toastService.warning('Uzupełnij lead artykułu.');
      return;
    }

    if (articleToSave.summaryItems.length === 0) {
      this.toastService.warning('Dodaj przynajmniej jeden punkt podsumowania.');
      return;
    }

    if (articleToSave.summaryItems.some((item) => !item.name.trim())) {
      this.toastService.warning('Uzupełnij wszystkie punkty podsumowania.');
      return;
    }

    if (articleToSave.tableOfContentItems.length === 0) {
      this.toastService.warning('Dodaj przynajmniej jedną pozycję spisu treści.');
      return;
    }

    if (articleToSave.tableOfContentItems.some((item) => !item.name.trim())) {
      this.toastService.warning('Uzupełnij wszystkie pozycje spisu treści.');
      return;
    }

    if (articleToSave.sections.length === 0) {
      this.toastService.warning('Dodaj przynajmniej jedną sekcję artykułu.');
      return;
    }

    if (articleToSave.sections.some((section) => !section.subHeading.trim())) {
      this.toastService.warning('Uzupełnij nagłówki wszystkich sekcji.');
      return;
    }

    if (articleToSave.sections.some((section) => !section.paragraph.trim())) {
      this.toastService.warning('Uzupełnij treść wszystkich sekcji.');
      return;
    }

    this.isSaving.set(true);

    if (this.isNewArticle) {
      this.articleService.addArticle(articleToSave).subscribe({
        next: () => {
          this.cleanupUnusedUploadedImages();

          this.toastService.success('Artykuł został utworzony.');

          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.isSaving.set(false);

          console.error('Failed to create article', error);

          if (error.status === 409) {
            this.toastService.error('Artykuł o takim adresie już istnieje.');
            return;
          }

          this.toastService.error('Nie udało się utworzyć artykułu.');
        },
      });

      return;
    }

    this.articleService.updateArticle(articleToSave).subscribe({
      next: () => {
        this.cleanupUnusedUploadedImages();

        this.toastService.success('Zmiany zostały zapisane.');

        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.isSaving.set(false);

        console.error('Failed to update article', error);

        if (error.status === 409) {
          this.toastService.error('Artykuł o takim adresie już istnieje.');
          return;
        }

        this.toastService.error('Nie udało się zapisać zmian.');
      },
    });
  }

  addSummaryItem(): void {
    const newItem: ArticleSummaryItem = {
      id: crypto.randomUUID(),
      name: '',
    };

    this.article.update((current) => ({
      ...current,
      summaryItems: [...current.summaryItems, newItem],
    }));
  }

  updateSummaryItem(id: string, name: string): void {
    this.article.update((current) => ({
      ...current,
      summaryItems: current.summaryItems.map((item) =>
        item.id === id
          ? {
              ...item,
              name,
            }
          : item,
      ),
    }));
  }

  useJpgFallback(event: Event, image: string): void {
    const img = event.target as HTMLImageElement;

    if (img.src.endsWith('.png')) {
      img.src = `/${image}.jpg`;
    }
  }

  removeSummaryItem(id: string): void {
    this.article.update((current) => ({
      ...current,
      summaryItems: current.summaryItems.filter((item) => item.id !== id),
    }));
  }

  addContentItem(): void {
    const newItem: ArticleTableOfContentItem = {
      id: crypto.randomUUID(),
      name: '',
      link: '',
    };

    this.article.update((current) => ({
      ...current,
      tableOfContentItems: [...current.tableOfContentItems, newItem],
    }));
  }

  updateContentItem(id: string, field: 'name' | 'link', value: string): void {
    this.article.update((current) => ({
      ...current,
      tableOfContentItems: current.tableOfContentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));
  }

  removeContentItem(id: string): void {
    this.article.update((current) => ({
      ...current,
      tableOfContentItems: current.tableOfContentItems.filter((item) => item.id !== id),
    }));
  }

  addSection(): void {
    const newSection: ArticleSection = {
      id: crypto.randomUUID(),
      subHeading: '',
      paragraph: '',
      imageLarge: '',
      imageSmall: '',
      mobileImageMode: 'SAME',
      slug: '',
    };

    this.article.update((current) => ({
      ...current,
      sections: [...current.sections, newSection],
    }));
  }

  updateSection(
    id: string,
    field: 'subHeading' | 'paragraph' | 'imageLarge' | 'imageSmall' | 'slug',
    value: string,
  ): void {
    this.article.update((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === id
          ? {
              ...section,
              [field]: value,
            }
          : section,
      ),
    }));
  }

  updateMobileImageMode(id: string, mode: MobileImageMode): void {
    this.article.update((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === id
          ? {
              ...section,
              mobileImageMode: mode,
              imageSmall: mode === 'CUSTOM' ? section.imageSmall : '',
            }
          : section,
      ),
    }));
  }
  removeSection(id: string): void {
    const shouldRemove = confirm('Czy na pewno chcesz usunąć tę sekcję?');

    if (!shouldRemove) {
      return;
    }

    this.article.update((current) => ({
      ...current,
      sections: current.sections.filter((section) => section.id !== id),
    }));
  }

  moveSectionUp(index: number): void {
    if (index <= 0) {
      return;
    }

    this.article.update((current) => {
      const sections = [...current.sections];

      [sections[index - 1], sections[index]] = [sections[index], sections[index - 1]];

      return {
        ...current,
        sections,
      };
    });
  }

  moveSectionDown(index: number): void {
    if (index >= this.article().sections.length - 1) {
      return;
    }

    this.article.update((current) => {
      const sections = [...current.sections];

      [sections[index], sections[index + 1]] = [sections[index + 1], sections[index]];

      return {
        ...current,
        sections,
      };
    });
  }

  uploadMainImage(event: Event): void {
    const input = event.target as HTMLInputElement;

    const file = input.files?.[0];

    if (!file) {
      return;
    }

    this.isUploadingMainImage.set(true);

    this.fileService.uploadImage(file).subscribe({
      next: (response) => {
        this.trackUploadedImage(response.key);

        this.article.update((current) => ({
          ...current,
          image: response.key,
        }));

        this.isUploadingMainImage.set(false);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Failed to upload main image', error);

        this.handleImageUploadError(error);

        this.isUploadingMainImage.set(false);
      },
    });
  }

  uploadSectionImage(event: Event, sectionId: string, field: 'imageLarge' | 'imageSmall'): void {
    const input = event.target as HTMLInputElement;

    const file = input.files?.[0];

    if (!file) {
      return;
    }

    const uploadKey = `${sectionId}-${field}`;

    this.uploadingSectionImages.update((current) => {
      const updated = new Set(current);

      updated.add(uploadKey);

      return updated;
    });

    this.fileService.uploadImage(file).subscribe({
      next: (response) => {
        this.trackUploadedImage(response.key);

        this.updateSection(sectionId, field, response.key);

        this.finishSectionImageUpload(uploadKey);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Failed to upload section image', error);

        this.handleImageUploadError(error);

        this.finishSectionImageUpload(uploadKey);
      },
    });
  }

  isSectionImageUploading(sectionId: string, field: 'imageLarge' | 'imageSmall'): boolean {
    return this.uploadingSectionImages().has(`${sectionId}-${field}`);
  }

  private finishSectionImageUpload(uploadKey: string): void {
    this.uploadingSectionImages.update((current) => {
      const updated = new Set(current);

      updated.delete(uploadKey);

      return updated;
    });
  }

  getImageUrl(image: string): string {
    return this.imageService.getUrl(image);
  }

  previewArticle(): void {
    localStorage.setItem('article-preview', JSON.stringify(this.article()));

    window.open('/dashboard/preview', '_blank', 'noopener,noreferrer');
  }

  private trackUploadedImage(key: string): void {
    this.uploadedImageKeys.update((current) => {
      const updated = new Set(current);

      updated.add(key);

      return updated;
    });
  }

  cancelEdit(): void {
    const keys = [...this.uploadedImageKeys()];

    if (keys.length === 0) {
      this.router.navigate(['/dashboard']);
      return;
    }

    let completed = 0;

    keys.forEach((key) => {
      this.fileService.deleteImage(key).subscribe({
        next: () => {
          completed++;

          this.finishCancelCleanup(completed, keys.length);
        },
        error: (error) => {
          console.error('Failed to delete unused image', key, error);

          completed++;

          this.finishCancelCleanup(completed, keys.length);
        },
      });
    });
  }

  private finishCancelCleanup(completed: number, total: number): void {
    if (completed === total) {
      this.uploadedImageKeys.set(new Set());

      this.router.navigate(['/dashboard']);
    }
  }

  private getUsedImageKeys(): Set<string> {
    const article = this.article();

    const keys = new Set<string>();

    if (article.image) {
      keys.add(article.image);
    }

    article.sections.forEach((section) => {
      if (section.imageLarge) {
        keys.add(section.imageLarge);
      }

      if (section.imageSmall) {
        keys.add(section.imageSmall);
      }
    });

    return keys;
  }

  private cleanupUnusedUploadedImages(): void {
    const usedImageKeys = this.getUsedImageKeys();

    const unusedImageKeys = [...this.uploadedImageKeys()].filter((key) => !usedImageKeys.has(key));

    unusedImageKeys.forEach((key) => {
      this.fileService.deleteImage(key).subscribe({
        error: (error) => {
          console.error('Failed to delete unused image', key, error);
        },
      });
    });

    this.uploadedImageKeys.set(new Set());
  }

  private handleImageUploadError(error: HttpErrorResponse): void {
    console.error('Image upload failed', error);

    if (error.status === 0) {
      this.toastService.error('Nie udało się połączyć z serwerem.');
      return;
    }

    if (error.status === 400) {
      this.toastService.error('Nieprawidłowy format, zawartość lub rozmiar obrazu.');
      return;
    }

    if (error.status === 413) {
      this.toastService.error('Obraz jest za duży. Maksymalny rozmiar to 5 MB.');
      return;
    }

    this.toastService.error('Nie udało się przesłać obrazu. Spróbuj ponownie.');
  }
}
