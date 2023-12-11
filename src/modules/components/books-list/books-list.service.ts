import { Injectable } from '@angular/core';
import {BookDetailModel} from "../book-detail/book-detail.model";
import {Observable} from "rxjs";
import {MockBooksService} from "../../core/domain/mock/mock-books.service";

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  constructor(private bookService: MockBooksService) { }

  getBooks(): Observable<Array<BookDetailModel>> {
    return this.bookService.getBooks();
  }
}
