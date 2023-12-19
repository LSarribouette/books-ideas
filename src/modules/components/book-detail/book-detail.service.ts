import { Injectable } from '@angular/core';
import {BookService} from "../../core/domain/book/book.service";
import {BookDetailModel} from "./book-detail.model";
import {filter, map, min, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookDetailService {

  constructor(private bookService: BookService) { }

  public getBookDetail(book: BookDetailModel): Observable<any> {
    return this.bookService.getBookDetails(book).pipe(min( (a,b) => a.publish_date < b.publish_date ? a.publish_date : b.publish_date ));
    // return this.bookService.getBookDetails(book).pipe(map( a => a.description === null ? "no description" : a.description ));
  }
}
