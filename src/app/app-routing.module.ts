import { AmazonComponent } from './components/amazon/amazon.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleComponent } from './components/google/google.component';

const routes: Routes = [
  {path: 'google', component: GoogleComponent},
  {path: 'facebook', component: FacebookComponent},
  {path: 'amazon', component: AmazonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
