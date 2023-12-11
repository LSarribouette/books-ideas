import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookDetailModel} from "../../../components/book-detail/book-detail.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = "https://openlibrary.org/works/OL675783W.json";

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  // getBooks(): Observable<Array<BookDetailModel>> {
  //   const books = of(booksListSample);
  //   return books;
  // }
}
