import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquipeComponent } from './form-equipe.component';

describe('FormEquipeComponent', () => {
  let component: FormEquipeComponent;
  let fixture: ComponentFixture<FormEquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
