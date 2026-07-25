import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSummary } from './article-summary';

describe('ArticleSummary', () => {
  let component: ArticleSummary;
  let fixture: ComponentFixture<ArticleSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
