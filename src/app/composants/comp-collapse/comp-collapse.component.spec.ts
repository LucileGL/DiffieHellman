import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCollapseComponent } from './comp-collapse.component';

describe('CompCollapseComponent', () => {
  let component: CompCollapseComponent;
  let fixture: ComponentFixture<CompCollapseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompCollapseComponent]
    });
    fixture = TestBed.createComponent(CompCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
