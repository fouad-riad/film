import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private htpp :HttpClient) {}
 
   getCategorie(): Observable<string[]>{
    return this.htpp.get<string[]>("https://fakestoreapi.com/products/categories")
   }

}
