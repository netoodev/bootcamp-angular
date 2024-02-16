import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit{

  name:string = 'Pikachu';
  attributesTypes:string[]= ['Electric'];
  imageUrl:string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'

  constructor(){
  }

  ngOnInit(): void {
  }

}
