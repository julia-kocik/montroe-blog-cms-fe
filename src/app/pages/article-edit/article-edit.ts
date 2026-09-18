import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
} from '@angular/router';

import {
  Article,
  ArticleSection,
  ArticleSummaryItem,
  ArticleTableOfContentItem,
} from '../../models/article.model';
import { ArticleService } from '../../services/article';
import { FileService } from '../../services/file';
import { ImageService } from '../../services/image';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
  ],
  templateUrl: './article-edit.html',
  styleUrl: './article-edit.scss',
})
export class ArticleEdit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly articleService = inject(ArticleService);
  private readonly fileService = inject(FileService);
  readonly articleId =
    this.route.snapshot.paramMap.get('id');

  readonly isNewArticle = this.articleId === null;

  private readonly imageService = inject(ImageService);
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

readonly isUploadingMainImage = signal(false);
readonly uploadingSectionImages = signal<Set<string>>(
  new Set()
);

constructor() {
  if (this.articleId) {
    this.articleService.getArticleById(this.articleId).subscribe({
      next: (article) => {
        this.article.set(article);
      },
      error: (error) => {
        console.error('Failed to load article', error);
      },
    });
  }
}

  saveArticle(): void {
    if (
      this.isUploadingMainImage() ||
      this.uploadingSectionImages().size > 0
    ) {
      alert('Poczekaj na zakończenie wysyłania obrazów.');
      return;
    }
    const articleToSave = this.article();

    if (!articleToSave.name.trim()) {
      alert('Uzupełnij tytuł artykułu.');
      return;
    }

    if (this.isNewArticle) {
      this.articleService.addArticle(articleToSave).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Failed to create article', error);
        },
      });

      return;
    }

    this.articleService.updateArticle(articleToSave).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Failed to update article', error);
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
      summaryItems: [
        ...current.summaryItems,
        newItem,
      ],
    }));
  }

  updateSummaryItem(
    id: string,
    name: string
  ): void {
    this.article.update((current) => ({
      ...current,
      summaryItems: current.summaryItems.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                name,
              }
            : item
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
      summaryItems: current.summaryItems.filter(
        (item) => item.id !== id
      ),
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
      tableOfContentItems: [
        ...current.tableOfContentItems,
        newItem,
      ],
    }));
  }

  updateContentItem(
    id: string,
    field: 'name' | 'link',
    value: string
  ): void {
    this.article.update((current) => ({
      ...current,
      tableOfContentItems:
        current.tableOfContentItems.map(
          (item) =>
            item.id === id
              ? {
                  ...item,
                  [field]: value,
                }
              : item
        ),
    }));
  }

  removeContentItem(id: string): void {
    this.article.update((current) => ({
      ...current,
      tableOfContentItems:
        current.tableOfContentItems.filter(
          (item) => item.id !== id
        ),
    }));
  }

  addSection(): void {
    const newSection: ArticleSection = {
      id: crypto.randomUUID(),
      subHeading: '',
      paragraph: '',
      imageLarge: '',
      imageSmall: '',
      slug: '',
    };

    this.article.update((current) => ({
      ...current,
      sections: [
        ...current.sections,
        newSection,
      ],
    }));
  }

  updateSection(
    id: string,
    field:
      | 'subHeading'
      | 'paragraph'
      | 'imageLarge'
      | 'imageSmall'
      | 'slug',
    value: string
  ): void {
    this.article.update((current) => ({
      ...current,
      sections: current.sections.map(
        (section) =>
          section.id === id
            ? {
                ...section,
                [field]: value,
              }
            : section
      ),
    }));
  }

  removeSection(id: string): void {
    const shouldRemove = confirm(
      'Czy na pewno chcesz usunąć tę sekcję?'
    );

    if (!shouldRemove) {
      return;
    }

    this.article.update((current) => ({
      ...current,
      sections: current.sections.filter(
        (section) => section.id !== id
      ),
    }));
  }

  moveSectionUp(index: number): void {
    if (index <= 0) {
      return;
    }

    this.article.update((current) => {
      const sections = [...current.sections];

      [
        sections[index - 1],
        sections[index],
      ] = [
        sections[index],
        sections[index - 1],
      ];

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

      [
        sections[index],
        sections[index + 1],
      ] = [
        sections[index + 1],
        sections[index],
      ];

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
      this.article.update((current) => ({
        ...current,
        image: response.key,
      }));

      this.isUploadingMainImage.set(false);
    },
    error: (error) => {
      console.error(
        'Failed to upload main image',
        error
      );

      this.isUploadingMainImage.set(false);
    },
  });
}
  uploadSectionImage(
    event: Event,
    sectionId: string,
    field: 'imageLarge' | 'imageSmall'
  ): void {
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
        this.updateSection(
          sectionId,
          field,
          response.key
        );

        this.finishSectionImageUpload(uploadKey);
      },
      error: (error) => {
        console.error(
          'Failed to upload section image',
          error
        );

        this.finishSectionImageUpload(uploadKey);
      },
    });
  }

  isSectionImageUploading(
    sectionId: string,
    field: 'imageLarge' | 'imageSmall'
  ): boolean {
    return this.uploadingSectionImages().has(
      `${sectionId}-${field}`
    );
  }

  private finishSectionImageUpload(
    uploadKey: string
  ): void {
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
    localStorage.setItem(
      'article-preview',
      JSON.stringify(this.article())
    );

    window.open(
      '/dashboard/preview',
      '_blank',
      'noopener,noreferrer'
    );
  }
}