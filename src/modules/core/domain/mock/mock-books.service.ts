import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {BookDetailModel} from "../../../components/book-detail/book-detail.model";
import {booksListSample} from "../../../components/books-list/books-list.sample";

@Injectable({
  providedIn: 'root'
})
export class MockBooksService {

  constructor() { }

  getBooks(): Observable<Array<BookDetailModel>> {
    return of(booksListSample);
  }
}
