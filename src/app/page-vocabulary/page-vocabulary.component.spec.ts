import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVocabularyComponent } from './page-vocabulary.component';

describe('PageVocabularyComponent', () => {
  let component: PageVocabularyComponent;
  let fixture: ComponentFixture<PageVocabularyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageVocabularyComponent]
    });
    fixture = TestBed.createComponent(PageVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
