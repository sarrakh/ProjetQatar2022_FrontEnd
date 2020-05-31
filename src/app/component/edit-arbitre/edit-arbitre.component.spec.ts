import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArbitreComponent } from './edit-arbitre.component';

describe('EditArbitreComponent', () => {
  let component: EditArbitreComponent;
  let fixture: ComponentFixture<EditArbitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArbitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArbitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
