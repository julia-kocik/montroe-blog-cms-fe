import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-article-image',
  standalone: true,
  imports: [],
  templateUrl: './article-image.html',
  styleUrl: './article-image.scss',
})
export class ArticleImage {

  readonly src = input.required<string>();

  readonly alt = input.required<string>();

  readonly height = input<string | number>('500px');

  readonly hiddenOnSmall = input(false);

  readonly hiddenOnLarge = input(false);

  readonly visibilityClass = computed(() => {

    if (this.hiddenOnSmall()) {
      return 'hidden-on-small';
    }

    if (this.hiddenOnLarge()) {
      return 'hidden-on-large';
    }

    return '';

  });

}