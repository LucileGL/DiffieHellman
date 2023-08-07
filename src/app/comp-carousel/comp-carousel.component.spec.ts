import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCarouselComponent } from './comp-carousel.component';

describe('CompCarouselComponent', () => {
  let component: CompCarouselComponent;
  let fixture: ComponentFixture<CompCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompCarouselComponent]
    });
    fixture = TestBed.createComponent(CompCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
