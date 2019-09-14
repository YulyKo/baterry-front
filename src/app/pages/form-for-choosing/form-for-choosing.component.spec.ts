import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForChoosingComponent } from './form-for-choosing.component';

describe('FormForChoosingComponent', () => {
  let component: FormForChoosingComponent;
  let fixture: ComponentFixture<FormForChoosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormForChoosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForChoosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
