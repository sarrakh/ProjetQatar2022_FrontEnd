import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpectateurComponent } from './edit-spectateur.component';

describe('EditSpectateurComponent', () => {
  let component: EditSpectateurComponent;
  let fixture: ComponentFixture<EditSpectateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpectateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpectateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
