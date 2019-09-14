import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfAddedComponent } from './card-of-added.component';

describe('CardOfAddedComponent', () => {
  let component: CardOfAddedComponent;
  let fixture: ComponentFixture<CardOfAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOfAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOfAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
