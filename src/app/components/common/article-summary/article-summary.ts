import { Component, input } from '@angular/core';

import { ArticleSummaryItem } from '../../../models/article.model';

@Component({
  selector: 'app-article-summary',
  standalone: true,
  imports: [],
  templateUrl: './article-summary.html',
  styleUrl: './article-summary.scss',
})
export class ArticleSummary {
  readonly summaryList = input.required<ArticleSummaryItem[]>();
}
