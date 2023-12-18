import { Injectable } from '@angular/core';
import {BookDetailModel} from "../book-detail/book-detail.model";
import {filter, map, Observable} from "rxjs";
import {BookService} from "../../core/domain/book/book.service";
import {SubjectResultModel} from "../../core/domain/subject/subject-result.model";
import {WorkModel} from "../../core/domain/work/work.model";

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  // subjectResult: SubjectResultModel = {key:"" ,name:"", work_count:0, works: []};
  // books: Array<BookDetailModel> = [];


  constructor(private bookService: BookService) { }

  // getBooks(): Observable<Array<BookDetailModel>> {
  //   return this.bookService.getBooks();
  // }
  // getData(): Observable<any> {
  //   return this.bookService.getData();
  // }

  getRandomSubject(): string {
    const subjects: Array<string> = [
      'climate change', 'science', 'romance', 'comedy', 'history', 'geography', 'literature', 'education', 'dystopias', 'culture'
    ];
    let randomIndex = Math.floor(Math.random() * (subjects.length));
    console.log("SubjectService", subjects[randomIndex]);
    return subjects[randomIndex];
  };

  getBooksBySubject(subject: string): Observable<any> {
    return this.bookService.getBooksBySubject(subject).pipe(filter( x => x.works));

    // return this.bookService.getBooksBySubject(subject);
    // this.bookService.getBooksBySubject(subject).subscribe(result => {
    //   // pipe > map ...
    //   this.books = result;
    //   console.log(this.books);
    //   // this.books = result.works;
    //   return this.books;
    //   // console.log(this.books);
    // });
    // return this.books;
  }

  //--- MAP
  public mapWorksToBooks(works: Array<WorkModel>): Array<BookDetailModel> {
    let books: Array<BookDetailModel> = [];
    books = works.map(this.mapWorkToBook);
    return books;
  }
  public mapWorkToBook(work: WorkModel): BookDetailModel {

    const coverUrl: string = `https://covers.openlibrary.org/b/id/${work.cover_id.toString()}-L.jpg`;

    if (work.cover_id == null) {
      work.cover_id = 0;
    }
    return {
      title: work.title,
      authors: work.authors,
      first_publish_year: work.first_publish_year.toString(),
      cover: work.cover_id.toString(),
      open_library_url: coverUrl,
      selected: false
    }
  }
}
