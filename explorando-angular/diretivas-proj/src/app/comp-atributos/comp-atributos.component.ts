import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent implements OnInit{

  estilo:string = "enable";
  corFundo:string = "lightblue";
  corDaFonte:string = "white";
  item:string = "";
  lista:string[] = [];
  isEnableBlock:boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  adicionarLista(){
    this.lista.push(this.item)
  }

  trocar(){
    if (this.estilo === "disable") {
      this.estilo = "enable"
    } else {
      this.estilo = "disable"
    }
  }

}
