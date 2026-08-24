import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ArticleService } from '../../services/article';
import { DatePipe } from '@angular/common';
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
 
  private readonly articleService = inject(ArticleService);

  readonly articles = this.articleService.articles;

  constructor() {
      console.log('DASHBOARD INIT');

    this.articleService.loadArticles();
  
  }  

  useJpgFallback(event: Event, image: string): void {
    const img = event.target as HTMLImageElement;

    if (img.src.endsWith('.png')) {
      img.src = `/${image}.jpg`;
    }
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