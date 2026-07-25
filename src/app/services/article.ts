import { Injectable, signal } from '@angular/core';

import { ARTICLES } from '../data/articles';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  readonly articles = signal<Article[]>(
    structuredClone(ARTICLES)
  );

  getArticleById(id: string): Article | undefined {
    return this.articles().find(
      (article) => article.id === id
    );
  }

  getArticleByPath(path: string): Article | undefined {
    return this.articles().find(
      (article) => article.path === path
    );
  }

  addArticle(article: Article): void {
    this.articles.update((articles) => [
      ...articles,
      structuredClone(article),
    ]);
  }

  updateArticle(updatedArticle: Article): void {
    this.articles.update((articles) =>
      articles.map((article) =>
        article.id === updatedArticle.id
          ? structuredClone(updatedArticle)
          : article
      )
    );
  }

  deleteArticle(id: string): void {
    this.articles.update((articles) =>
      articles.filter((article) => article.id !== id)
    );
  }
}