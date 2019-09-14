import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForChoosingPageComponent } from './for-choosing-page.component';

describe('ForChoosingPageComponent', () => {
  let component: ForChoosingPageComponent;
  let fixture: ComponentFixture<ForChoosingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForChoosingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForChoosingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
