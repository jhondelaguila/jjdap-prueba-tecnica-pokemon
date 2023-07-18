import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemonByIdOrName(id_name:string): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.baseUrl+id_name).pipe(
      map(res => {
        return {
          id: res.id,
          name: res.name,
          abilities: res.abilities,
          sprites: res.sprites,
          versions: res.sprites.versions
        }
      })
    );
  }
}
