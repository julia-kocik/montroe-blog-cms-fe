import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImage } from './article-image';

describe('ArticleImage', () => {
  let component: ArticleImage;
  let fixture: ComponentFixture<ArticleImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleImage],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
