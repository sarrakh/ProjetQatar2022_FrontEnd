import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJeuComponent } from './form-jeu.component';

describe('FormJeuComponent', () => {
  let component: FormJeuComponent;
  let fixture: ComponentFixture<FormJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
