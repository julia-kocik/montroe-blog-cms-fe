import { Injectable, inject, signal } from '@angular/core';
import { ARTICLES } from '../data/articles';
import { Article } from '../models/article.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  readonly articles2 = signal<Article[]>(
    structuredClone(ARTICLES)
  );

    private readonly apiUrl =
    'https://montroe-blog-cms-be.onrender.com/article';

  private readonly http = inject(HttpClient);

  readonly articles = signal<Article[]>([]);

  loadArticles(): void {
  this.http.get<Article[]>(this.apiUrl).subscribe({
    next: (articles) => {
      console.log('ARTICLES FROM API:', articles);

      this.articles.set(articles);
    },
    error: (error) => {
      console.error('Failed to load articles', error);
    },
  });
}

  deleteArticle(id: string): void {
    this.http.delete<void>(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.articles.update((articles) =>
          articles.filter((article) => article.id !== id)
        );
      },
      error: (error) => {
        console.error('Failed to delete article', error);
      },
    });
  }

  getArticleById(id: string) {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  getArticleByPath(path: string) {
    return this.http.get<Article>(
      `${this.apiUrl}/path/${path}`
    );
  }


  addArticle(article: Article) {
    return this.http.post<Article>(
      this.apiUrl,
      {
        name: article.name,
        lead: article.lead,
        summaryItems: article.summaryItems,
        sections: article.sections,
        tableOfContentItems: article.tableOfContentItems,
      }
    );
  }
    updateArticle(article: Article) {
    return this.http.patch<Article>(
      `${this.apiUrl}/${article.id}`,
      {
        name: article.name,
        image: article.image,
        lead: article.lead,
        summaryItems: article.summaryItems,
        tableOfContentItems: article.tableOfContentItems,
        sections: article.sections,
      }
    );
  }

}