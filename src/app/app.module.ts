import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmVetrinaComponent } from './components/film-vetrina/film-vetrina.component';
import { FilmPreviewComponent } from './components/film-preview/film-preview.component';

import { CategorieComponent } from './components/categorie/categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmVetrinaComponent,
    FilmPreviewComponent,
    CategorieComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
