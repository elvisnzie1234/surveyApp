import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BibPage } from './bib.page';

describe('BibPage', () => {
  let component: BibPage;
  let fixture: ComponentFixture<BibPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BibPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
