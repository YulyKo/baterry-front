import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardForAddComponent } from './elements/card-for-add/card-for-add.component';
import { CardOfAddedComponent } from './elements/card-of-added/card-of-added.component';
import { DayThemeComponent } from './pages/home-page/day-theme/day-theme.component';
import { NightThemeComponent } from './pages/home-page/night-theme/night-theme.component';
import { FormForChoosingComponent } from './pages/form-for-choosing/form-for-choosing.component';
import { ForChoosingPageComponent } from './pages/for-choosing-page/for-choosing-page.component';
import { ModalFormComponent } from './elements/modal-form/modal-form.component';
import { NotFoudPageComponent } from './pages/not-foud-page/not-foud-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardForAddComponent,
    CardOfAddedComponent,
    DayThemeComponent,
    NightThemeComponent,
    FormForChoosingComponent,
    ForChoosingPageComponent,
    ModalFormComponent,
    NotFoudPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
