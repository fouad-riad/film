import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../../services/prodotti.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit {
categorie:string[]=[]
constructor(private filmService:FilmService){

}
  ngOnInit(): void {
    this.filmService.getCategorie()
    .subscribe(categorie=>{
      this.categorie=categorie
    })
  }
}
