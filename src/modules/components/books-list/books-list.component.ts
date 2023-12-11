import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDetailModel} from '../book-detail/book-detail.model';
import {BookDetailComponent} from "../book-detail/book-detail.component";
import {BooksListService} from "./books-list.service";

@Component({
  selector: 'ls-books',
  standalone: true,
  imports: [CommonModule, BookDetailComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  books: Array<BookDetailModel> = [];

  constructor(private booksListService: BooksListService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.booksListService.getBooks()
      .subscribe(books => this.books = books);
  }
}
