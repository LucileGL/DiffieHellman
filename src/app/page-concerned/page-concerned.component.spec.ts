import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConcernedComponent } from './page-concerned.component';

describe('PageConcernedComponent', () => {
  let component: PageConcernedComponent;
  let fixture: ComponentFixture<PageConcernedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageConcernedComponent]
    });
    fixture = TestBed.createComponent(PageConcernedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
