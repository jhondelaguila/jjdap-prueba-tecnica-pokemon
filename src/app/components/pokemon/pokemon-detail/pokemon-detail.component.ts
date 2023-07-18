import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

  pokemon:any;
  versions_keys:string[] = [];

  constructor(private route: ActivatedRoute,private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const elementId:number = Number(params['id']);
      this.pokemonService.getPokemonByIdOrName(elementId.toString())
        .subscribe(res => {
          this.pokemon = res;   
          this.versions_keys = Object.keys(this.pokemon.versions);
        });      
    });
  }

}
