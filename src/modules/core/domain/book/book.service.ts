import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Book} from "./book.model";

@Injectable({
  providedIn: "root"
})
export class BookService {

  public constructor(private http: HttpClient) { }

  public getRandomBookList(subject: string): Observable<Book[]> {
    const SUBJECT_URL: string = `https://openlibrary.org/subjects/${subject}.json`;
    return this.http.get(SUBJECT_URL, {
      params: {details: "false", limit: "12", sort: "random"}
    })
      // je mappe le résultat de l'API back en mon modèle domaine Book
      .pipe(
        map((results: any) => {
          return this.mapBooks(results.works)
        })
      );
  }

  private mapBooks(bookResults: any[]): Book[] {
    // if (!bookResults) return;
    return bookResults.map(this.mapBook);
  }

  private mapBook(bookResult: any): Book {
    // if (!bookResult) return;

    let cover = "default";
    if (bookResult.cover_id !== null) {
      cover = bookResult.cover_id.toString();
    }
    const coverUrl: string = `https://covers.openlibrary.org/b/id/${cover}-L.jpg`;

    let first_publish_year = "";
    if (bookResult.first_publish_year !== null) {
      first_publish_year = bookResult.first_publish_year.toString();
    }

    let url_open_library: string = `https://openlibrary.org${bookResult.key}`;

    return {
      title: bookResult.title,
      authors: bookResult.authors,
      cover_url: coverUrl,
      first_publish_year: first_publish_year,
      subjects: bookResult.subjects,
      work_key: bookResult.work_key,
      url_open_library:  url_open_library,
    }
  }
}
