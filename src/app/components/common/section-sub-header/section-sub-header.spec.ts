import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSubHeader } from './section-sub-header';

describe('SectionSubHeader', () => {
  let component: SectionSubHeader;
  let fixture: ComponentFixture<SectionSubHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSubHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionSubHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
