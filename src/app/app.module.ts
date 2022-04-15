import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleComponent } from './components/google/google.component';
import { AmazonComponent } from './components/amazon/amazon.component';
import { FacebookComponent } from './components/facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleComponent,
    AmazonComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
