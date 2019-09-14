import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayThemeComponent } from './day-theme.component';

describe('DayThemeComponent', () => {
  let component: DayThemeComponent;
  let fixture: ComponentFixture<DayThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
