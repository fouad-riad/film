import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmVetrinaComponent } from './components/film-vetrina/film-vetrina.component';
import { FilmPreviewComponent } from './components/film-preview/film-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmVetrinaComponent,
    FilmPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
