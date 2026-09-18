import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ArticleService } from '../../services/article';
import { SectionWrapper } from '../../components/common/section-wrapper/section-wrapper';
import { SectionHeader } from '../../components/common/section-header/section-header';
import { ImageService } from '../../services/image';

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
  private readonly articleService = inject(ArticleService);

private readonly imageService = inject(ImageService);

  readonly articles = this.articleService.articles;

  constructor() {
    this.articleService.loadArticles();
  }

  getImageUrl(image: string): string {
  return this.imageService.getUrl(image);
}

  deleteArticle(id: string, name: string): void {
    const shouldDelete = confirm(
      `Czy na pewno chcesz usunąć artykuł „${name}”?`
    );

    if (!shouldDelete) {
      return;
    }

    this.articleService.deleteArticle(id);
  }
}