import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaComponent } from "./pagina/pagina.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina';
}
