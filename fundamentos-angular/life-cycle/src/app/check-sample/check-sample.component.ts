import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})

export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

	quantidade:number = 0;

	constructor() {}

	adicionar(){
		this.quantidade++;
	}

	decrementar(){
		this.quantidade--;
	}

	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}

	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}

	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}

	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}

	ngDoCheck(): void {
		console.log('ngDoCheck');
	}

	ngOnInit(): void {
		console.log('ngOnInit');
	}
}
