import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ArticleService } from '../../services/article';
import { ImageService } from '../../services/image';
import { ToastService } from '../../services/toast.service';

import { SectionWrapper } from '../../components/common/section-wrapper/section-wrapper';
import { SectionHeader } from '../../components/common/section-header/section-header';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe,
    SectionWrapper,
    SectionHeader,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly articleService =
    inject(ArticleService);

  private readonly imageService =
    inject(ImageService);

  private readonly toastService =
    inject(ToastService);

  readonly articles = this.articleService.articles;

  constructor() {
    this.loadArticles();
  }

  private loadArticles(): void {
    this.articleService.loadArticles().subscribe({
      next: (articles) => {
        this.articleService.articles.set(articles);
      },
      error: (error) => {
        console.error(
          'Failed to load articles',
          error
        );

        this.toastService.error(
          'Nie udało się pobrać artykułów.'
        );
      },
    });
  }

  getImageUrl(image: string): string {
    return this.imageService.getUrl(image);
  }

  deleteArticle(
    id: string,
    name: string
  ): void {
    const shouldDelete = confirm(
      `Czy na pewno chcesz usunąć artykuł „${name}”?`
    );

    if (!shouldDelete) {
      return;
    }

    this.articleService.deleteArticle(id).subscribe({
      next: () => {
        this.articleService.articles.update(
          (articles) =>
            articles.filter(
              (article) => article.id !== id
            )
        );

        this.toastService.success(
          'Artykuł został usunięty.'
        );
      },
      error: (error) => {
        console.error(
          'Failed to delete article',
          error
        );

        this.toastService.error(
          'Nie udało się usunąć artykułu.'
        );
      },
    });
  }
}