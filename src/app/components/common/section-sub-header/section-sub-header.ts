import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-sub-header',
  imports: [],
  templateUrl: './section-sub-header.html',
  styleUrl: './section-sub-header.scss',
})
export class SectionSubHeader {
  readonly text = input.required<string>();
}
