import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from "./books/books.component";
import {RandomSubjectComponent} from "./random-subject/random-subject.component";
import {SearchComponent} from "./search/search.component";

@Component({
  selector: 'ls-root',
  standalone: true,
  imports: [CommonModule, BooksComponent, RandomSubjectComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Books\' ideas';
}
