import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute:ActivatedRoute,
    ) {
    this.activeRoute.params.subscribe(
      res => console.log(res)
    );

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    );

    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    );
  }

  ngOnInit(): void {
  }

}
