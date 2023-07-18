import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  formSearch: FormGroup;

  constructor(private pokemonService: PokemonService, private router: Router){
    this.formSearch = new FormGroup({
      pokemon_name: new FormControl()
    });
  }

  search(){
    this.pokemonService.getPokemonByIdOrName(this.formSearch.value.pokemon_name).subscribe(res => {
      this.router.navigate([`/pokemon-detail/${res.id}`]);
    });
  }
}
