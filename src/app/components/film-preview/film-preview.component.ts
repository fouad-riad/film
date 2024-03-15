import { Component, Input } from '@angular/core';
import { Film } from '../../dati/models/dato';

@Component({
  selector: 'app-film-preview',
  templateUrl: './film-preview.component.html',
  styleUrl: './film-preview.component.css'
})
export class FilmPreviewComponent {
  @Input()
film?: Film
}
