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

  //jamais
  // subjectResult: SubjectResultModel = {key:"" ,name:"", work_count:0, works: []};
  // books: Array<BookDetailModel> = [];

  // state programming

  constructor(private bookService: BookService) { }

  initBookList(): BooksList { // état initial
    return {
      //...
      // this.books = [];
      // this.subject = this.booksListService.getRandomSubject();
      // this.search = "";
    }
  }

  // foncitons suivantes : accès état initial pour calculer les états suivants
  // test : je vérifie que mon état de sortie est le bon
  // surtout tests sur services (Karma unitaires != Playwright... end-to-end)
  loadBookList(currentState: BooksList): Observable<BooksList> {
    //j'appelle + pipe + map
    // je lis currentState.subject
  }

  search(currentState, searchValue): Observable<BooksList> {

  }

  // getBooks(): Observable<Array<BookDetailModel>> {
  //   return this.bookService.getBooks();
  // }
  // getData(): Observable<any> {
  //   return this.bookService.getData();
  // }

  getRandomSubject(): string {
    const subjects: Array<string> = [ // type ?
      'climate change', 'science', 'romance', 'comedy', 'history', 'geography', 'literature', 'education', 'dystopias', 'culture'
    ];
    let randomIndex = Math.floor(Math.random() * (subjects.length));
    console.log("SubjectService", subjects[randomIndex]);
    return subjects[randomIndex];
  };

  getBooksBySubject(subject: string): Observable<any> {
    return this.bookService.getBooksBySubject(subject);
  }

  getSearchResults(search: string): Observable<any> {
    return this.bookService.getSearchResults(search);
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
