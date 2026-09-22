import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ARTICLES } from '../data/articles';
import { Article, ArticleSaveRequest } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  readonly articles2 = signal<Article[]>(structuredClone(ARTICLES));

  private readonly apiUrl = 'https://montroe-blog-cms-be.onrender.com/article';

  private readonly http = inject(HttpClient);

  readonly articles = signal<Article[]>([]);

  loadArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  deleteArticle(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getArticleById(id: string) {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  getArticleByPath(path: string) {
    return this.http.get<Article>(`${this.apiUrl}/path/${path}`);
  }

  addArticle(article: ArticleSaveRequest) {
    return this.http.post<Article>(this.apiUrl, {
      name: article.name,
      image: article.image,
      lead: article.lead,
      summaryItems: article.summaryItems,
      sections: article.sections,
      tableOfContentItems: article.tableOfContentItems,
    });
  }

  updateArticle(article: ArticleSaveRequest) {
    return this.http.patch<Article>(`${this.apiUrl}/${article.id}`, {
      name: article.name,
      image: article.image,
      lead: article.lead,
      summaryItems: article.summaryItems,
      tableOfContentItems: article.tableOfContentItems,
      sections: article.sections,
    });
  }
}