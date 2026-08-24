import {
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
} from '@angular/router';

import { Article as ArticleModel } from '../../models/article.model';
import { ArticleService } from '../../services/article';

import { ArticleContents } from '../../components/common/article-contents/article-contents';
import { ArticleImage } from '../../components/common/article-image/article-image';
import { ArticleSummary } from '../../components/common/article-summary/article-summary';
import { SectionHeader } from '../../components/common/section-header/section-header';
import { SectionWrapper } from '../../components/common/section-wrapper/section-wrapper';
import { SectionSubHeader } from '../../components/common/section-sub-header/section-sub-header';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterLink,
    ArticleContents,
    ArticleImage,
    ArticleSummary,
    SectionHeader,
    SectionWrapper,
    SectionSubHeader,
    DatePipe,
  ],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article {
  private readonly route = inject(ActivatedRoute);

  private readonly articleService =
    inject(ArticleService);

  readonly article = signal<ArticleModel | undefined>(
    undefined
  );

  constructor() {
    const path =
      this.route.snapshot.paramMap.get('path');

    if (path) {
      this.articleService
        .getArticleByPath(path)
        .subscribe({
          next: (article) => {
            this.article.set(article);
          },
          error: (error) => {
            console.error(
              'Failed to load article',
              error
            );
          },
        });
    }
  }

  getImageSrc(src: string): string {
    if (
      src.startsWith('/') ||
      src.startsWith('http://') ||
      src.startsWith('https://') ||
      src.startsWith('data:')
    ) {
      return src;
    }

    return `/images/${src}`;
  }
}