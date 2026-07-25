import { Injectable, signal } from '@angular/core';

import { Article } from '../models/article.model';
import { ARTICLES } from '../data/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  readonly articles = signal<Article[]>(ARTICLES);

  deleteArticle(id: string): void {
    this.articles.update((articles) =>
      articles.filter((article) => article.id !== id)
    );
  }

}