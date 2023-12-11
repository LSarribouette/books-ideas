import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookModel} from '../book/book.model';
import {BookComponent} from "../book/book.component";
import {booksSample} from "./books.sample";

@Component({
  selector: 'ls-books',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Array<BookModel> = booksSample;
}
