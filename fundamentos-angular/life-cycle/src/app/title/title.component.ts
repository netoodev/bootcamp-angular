import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() nome:string = '';

	constructor() {
		console.log(`Construtor ${this.nome}`);
	}

	ngOnChanges(): void {
		console.log(`OnChanges ${this.nome}`)
	}

	ngOnInit(): void {
		this.nome += "x"
		console.log(`OnInit ${this.nome}`);
	}
}
