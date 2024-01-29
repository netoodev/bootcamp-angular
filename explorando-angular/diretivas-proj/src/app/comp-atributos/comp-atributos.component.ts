import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent implements OnInit{

  estilo:string = "enable";
  corFundo:string = "lightblue";
  corDaFonte:string = "white";

  constructor() {
  }

  ngOnInit(): void {
  }

  trocar(){
    if (this.estilo === "disable") {
      this.estilo = "enable"
    } else {
      this.estilo = "disable"
    }
  }

}
