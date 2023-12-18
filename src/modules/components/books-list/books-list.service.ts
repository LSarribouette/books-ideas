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
  }

  //--- MAP
  public mapWorksToBooks(works: Array<WorkModel>): Array<BookDetailModel> {
    return works.map(this.mapWorkToBook);
  }

  public mapWorkToBook(work: WorkModel): BookDetailModel {
    let cover = "default"
    if (work.cover_id !== null) {
      cover = work.cover_id.toString();
    }
    const coverUrl: string = `https://covers.openlibrary.org/b/id/${cover}-L.jpg`;

    let first_publish_year = "";
    if (work.first_publish_year !== null) {
      first_publish_year = work.first_publish_year.toString();
    }

    let open_library_url: string = `https://openlibrary.org${work.key}`;

    return {
      title: work.title,
      work_key: work.key,
      authors: work.authors,
      first_publish_year: first_publish_year,
      cover: coverUrl,
      open_library_url: open_library_url,
      selected: false
    }
  }
}
