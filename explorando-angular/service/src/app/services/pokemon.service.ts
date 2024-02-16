import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl:string = '';

  constructor() {
    this.baseUrl = environment.pokeApi;
  }

  getPokemon(pokemonName:string) {
    console.log(pokemonName)
  }

}
