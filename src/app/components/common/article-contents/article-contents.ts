import { Component, input } from '@angular/core';

import { ArticleTableOfContentItem} from '../../../models/article.model';

@Component({
  selector: 'app-article-contents',
  standalone: true,
  imports: [],
  templateUrl: './article-contents.html',
  styleUrl: './article-contents.scss',
})
export class ArticleContents {
  readonly contentsList =
    input.required<ArticleTableOfContentItem[]>();
}