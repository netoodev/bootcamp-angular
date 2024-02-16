import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <h1>Aula de Services</h1>
  <app-card></app-card>
  <router-outlet />
  `,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CardComponent]
})
export class AppComponent {
  title = 'service';
}
