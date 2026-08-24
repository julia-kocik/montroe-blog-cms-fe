import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
} from '@angular/router';

import {
  Article,
  ArticleContentItem,
  ArticleSection,
  ArticleSummaryItem,
} from '../../models/article.model';
import { ArticleService } from '../../services/article';

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

  readonly articleId =
    this.route.snapshot.paramMap.get('id');

  readonly isNewArticle = this.articleId === null;

  readonly article = signal<Article>(
    this.createInitialArticle()
  );

  private createInitialArticle(): Article {
    if (this.articleId) {
      const existingArticle =
        this.articleService.getArticleById(this.articleId);

      if (existingArticle) {
        return structuredClone(existingArticle);
      }
    }

    return {
      id: crypto.randomUUID(),
      publicationDate: '',
      name: '',
      image: '',
      path: '',
      lead: '',
      summaryList: [],
      contentList: [],
      articleStructure: [],
    };
  }

  saveArticle(): void {
    const articleToSave = this.article();

    if (!articleToSave.name.trim()) {
      alert('Uzupełnij tytuł artykułu.');
      return;
    }

    if (!articleToSave.path.trim()) {
      alert('Uzupełnij adres artykułu.');
      return;
    }

    if (this.isNewArticle) {
      this.articleService.addArticle(articleToSave);
    } else {
      this.articleService.updateArticle(articleToSave);
    }

    this.router.navigate(['/dashboard']);
  }

  addSummaryItem(): void {
    const newItem: ArticleSummaryItem = {
      id: this.generateNumericId(
        this.article().summaryList.map(
          (item) => item.id
        )
      ),
      name: '',
    };

    this.article.update((current) => ({
      ...current,
      summaryList: [
        ...current.summaryList,
        newItem,
      ],
    }));
  }

  updateSummaryItem(
    id: number,
    name: string
  ): void {
    this.article.update((current) => ({
      ...current,
      summaryList: current.summaryList.map(
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

  removeSummaryItem(id: number): void {
    this.article.update((current) => ({
      ...current,
      summaryList: current.summaryList.filter(
        (item) => item.id !== id
      ),
    }));
  }

  addContentItem(): void {
    const newItem: ArticleContentItem = {
      id: this.generateNumericId(
        this.article().contentList.map(
          (item) => item.id
        )
      ),
      name: '',
      link: '',
    };

    this.article.update((current) => ({
      ...current,
      contentList: [
        ...current.contentList,
        newItem,
      ],
    }));
  }

  updateContentItem(
    id: number,
    field: 'name' | 'link',
    value: string
  ): void {
    this.article.update((current) => ({
      ...current,
      contentList: current.contentList.map(
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

  removeContentItem(id: number): void {
    this.article.update((current) => ({
      ...current,
      contentList: current.contentList.filter(
        (item) => item.id !== id
      ),
    }));
  }

  addSection(): void {
    const newSection: ArticleSection = {
      id: this.generateNumericId(
        this.article().articleStructure.map(
          (section) => section.id
        )
      ),
      subHeading: '',
      paragraph: '',
      imageLarge: '',
      imageSm: '',
      slug: '',
    };

    this.article.update((current) => ({
      ...current,
      articleStructure: [
        ...current.articleStructure,
        newSection,
      ],
    }));
  }

  updateSection(
    id: number,
    field:
      | 'subHeading'
      | 'paragraph'
      | 'imageLarge'
      | 'imageSm'
      | 'slug',
    value: string
  ): void {
    this.article.update((current) => ({
      ...current,
      articleStructure:
        current.articleStructure.map(
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

  removeSection(id: number): void {
    const shouldRemove = confirm(
      'Czy na pewno chcesz usunąć tę sekcję?'
    );

    if (!shouldRemove) {
      return;
    }

    this.article.update((current) => ({
      ...current,
      articleStructure:
        current.articleStructure.filter(
          (section) => section.id !== id
        ),
    }));
  }

  moveSectionUp(index: number): void {
    if (index <= 0) {
      return;
    }

    this.article.update((current) => {
      const sections = [
        ...current.articleStructure,
      ];

      [
        sections[index - 1],
        sections[index],
      ] = [
        sections[index],
        sections[index - 1],
      ];

      return {
        ...current,
        articleStructure: sections,
      };
    });
  }

  moveSectionDown(index: number): void {
    if (
      index >=
      this.article().articleStructure.length - 1
    ) {
      return;
    }

    this.article.update((current) => {
      const sections = [
        ...current.articleStructure,
      ];

      [
        sections[index],
        sections[index + 1],
      ] = [
        sections[index + 1],
        sections[index],
      ];

      return {
        ...current,
        articleStructure: sections,
      };
    });
  }

  private generateNumericId(
    ids: number[]
  ): number {
    if (ids.length === 0) {
      return 1;
    }

    return Math.max(...ids) + 1;
  }
}