import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemonList: any = [];
  pokemonPage: any = [];
  actualPage: number = 0;
  totalPages: number = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.totalPages = Number((1010 / 8).toString().split('.')[0]);
    this.updatePage();
  }

  nextPage() {
    if (this.actualPage < this.totalPages) {
      this.actualPage++;
      this.updatePage();
    }
  }

  previousPage() {
    if (this.actualPage > 0) {
      this.actualPage--;
      this.updatePage();
    }
  }

  private updatePage() {
    for (let i = 0; i < 8; i++) {
      this.pokemonService
        .getPokemonByIdOrName(
          (Math.floor(Math.random() * (1010 - 1 + 1)) + 1).toString()
        )
        .subscribe((res) => {
          this.pokemonList.push(res);
          this.pokemonPage = [];
          for (let index = 0; index < 8; index++) {
            this.pokemonPage.push(
              this.pokemonList[index + this.actualPage * 8]
            );
          }
        });
    }
  }
}
