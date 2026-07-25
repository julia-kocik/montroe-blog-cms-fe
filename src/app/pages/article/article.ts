import {
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  RouterLink,
} from '@angular/router';

import { ArticleService } from '../../services/article';
import { ArticleContents } from '../../components/common/article-contents/article-contents';
import { ArticleImage } from '../../components/common/article-image/article-image';
import { ArticleSummary } from '../../components/common/article-summary/article-summary';
import { SectionHeader } from '../../components/common/section-header/section-header';
import { SectionWrapper } from '../../components/common/section-wrapper/section-wrapper';
import { SectionSubHeader } from '../../components/common/section-sub-header/section-sub-header';

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
  ],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article {
  private readonly route = inject(ActivatedRoute);

  private readonly articleService =
    inject(ArticleService);

  private readonly paramMap = toSignal(
    this.route.paramMap,
    {
      initialValue:
        this.route.snapshot.paramMap,
    }
  );

  readonly path = computed(() =>
    this.paramMap().get('path')
  );

  readonly article = computed(() => {
    const path = this.path();

    if (!path) {
      return undefined;
    }

    return this.articleService.getArticleByPath(
      path
    );
  });

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