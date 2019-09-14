import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForAddComponent } from './card-for-add.component';

describe('CardForAddComponent', () => {
  let component: CardForAddComponent;
  let fixture: ComponentFixture<CardForAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardForAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardForAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
