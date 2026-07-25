import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContents } from './article-contents';

describe('ArticleContents', () => {
  let component: ArticleContents;
  let fixture: ComponentFixture<ArticleContents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleContents],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleContents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
