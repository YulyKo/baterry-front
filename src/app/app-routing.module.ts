import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ForChoosingPageComponent } from './pages/for-choosing-page/for-choosing-page.component';
import { NotFoudPageComponent } from './pages/not-foud-page/not-foud-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'adding-new' , component: ForChoosingPageComponent },
  { path: '**', component: NotFoudPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
