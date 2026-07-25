import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ArticleService } from '../../services/article';

import { SectionWrapper } from '../../components/common/section-wrapper/section-wrapper';
import { SectionHeader } from '../../components/common/section-header/section-header';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    SectionWrapper,
    SectionHeader,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly articleService = inject(ArticleService);

  readonly articles = this.articleService.articles;

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