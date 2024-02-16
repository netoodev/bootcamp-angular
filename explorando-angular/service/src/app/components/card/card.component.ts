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

  name:string = 'Bulbassaur';
  attributesTypes:string[]= ['Fire', 'Rock'];

  constructor(){
  }

  ngOnInit(): void {
  }

}
