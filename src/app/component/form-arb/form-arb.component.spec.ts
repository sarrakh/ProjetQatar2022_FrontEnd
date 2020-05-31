import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArbComponent } from './form-arb.component';

describe('FormArbComponent', () => {
  let component: FormArbComponent;
  let fixture: ComponentFixture<FormArbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
