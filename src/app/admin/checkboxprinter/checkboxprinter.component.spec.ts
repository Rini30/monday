import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxprinterComponent } from './checkboxprinter.component';

describe('CheckboxprinterComponent', () => {
  let component: CheckboxprinterComponent;
  let fixture: ComponentFixture<CheckboxprinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxprinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxprinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
