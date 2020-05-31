import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJorComponent } from './form-jor.component';

describe('FormJorComponent', () => {
  let component: FormJorComponent;
  let fixture: ComponentFixture<FormJorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
