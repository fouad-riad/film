import { Component } from '@angular/core';
import { Film } from '../../dati/models/dato';
import { FILM } from '../../dati/dati';

@Component({
  selector: 'app-film-vetrina',
  templateUrl: './film-vetrina.component.html',
  styleUrl: './film-vetrina.component.css'
})
export class FilmVetrinaComponent {
film: Film[]= FILM
}
