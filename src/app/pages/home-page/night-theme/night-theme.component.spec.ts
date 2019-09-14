import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightThemeComponent } from './night-theme.component';

describe('NightThemeComponent', () => {
  let component: NightThemeComponent;
  let fixture: ComponentFixture<NightThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
