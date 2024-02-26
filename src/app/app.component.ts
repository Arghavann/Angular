import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {S04Component} from "./s04/s04.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, S04Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-ang-project';
}
