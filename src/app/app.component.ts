import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from "./books/books.component";

@Component({
  selector: 'ls-root',
  standalone: true,
  imports: [CommonModule, BooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Books\' ideas';
}
