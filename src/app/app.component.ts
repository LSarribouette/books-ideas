import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from "../modules/components/books-list/books-list.component";
import {RandomSubjectComponent} from "../modules/components/random-subject/random-subject.component";
import {SearchComponent} from "../modules/components/search/search.component";

@Component({
  selector: 'ls-root',
  standalone: true,
  imports: [CommonModule, BooksListComponent, RandomSubjectComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Books\' ideas';
}
