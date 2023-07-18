import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonList: any = [];

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
    for(let i=0; i<8; i++){
      this.pokemonService.getPokemonByIdOrName((Math.floor(Math.random() * (1010 - 1 + 1)) + 1).toString()).subscribe(res =>{
        this.pokemonList.push(res);
      });
    }
    console.log(this.pokemonList);
    
  }

}
