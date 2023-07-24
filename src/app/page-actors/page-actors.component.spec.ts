import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActorsComponent } from './page-actors.component';

describe('PageActorsComponent', () => {
  let component: PageActorsComponent;
  let fixture: ComponentFixture<PageActorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageActorsComponent]
    });
    fixture = TestBed.createComponent(PageActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
