import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltelephoneComponent } from './modaltelephone.component';

describe('ModaltelephoneComponent', () => {
  let component: ModaltelephoneComponent;
  let fixture: ComponentFixture<ModaltelephoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModaltelephoneComponent]
    });
    fixture = TestBed.createComponent(ModaltelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
