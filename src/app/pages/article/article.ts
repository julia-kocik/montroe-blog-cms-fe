import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article {

  private route = inject(ActivatedRoute);

  readonly path = this.route.snapshot.paramMap.get('path');

}