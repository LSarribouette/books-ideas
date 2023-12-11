import { Injectable } from '@angular/core';
import {BookDetailModel} from "../book-detail/book-detail.model";
import {Observable} from "rxjs";
import {BookService} from "../../core/domain/book/book.service";

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  constructor(private bookService: BookService) { }

  // getBooks(): Observable<Array<BookDetailModel>> {
  //   return this.bookService.getBooks();
  // }
  getData(): Observable<any> {
    return this.bookService.getData();
  }
}
