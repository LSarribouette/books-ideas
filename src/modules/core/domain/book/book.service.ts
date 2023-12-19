import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";
import {SubjectResultModel} from "../subject/subject-result.model";
import {WorkModel} from "../work/work.model";
import {BookDetailModel} from "../../../components/book-detail/book-detail.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // private url = "https://openlibrary.org/works/OL675783W.json";
  // private subjectUrl = "https://openlibrary.org/subjects/";

  constructor(private http: HttpClient) {
  }

  // getData(): Observable<any> {
  //   return this.http.get(this.url);
  // }

  public getBooksBySubject(subject: string): Observable<WorkModel[]> {
    const SUBJECT_URL: string = `https://openlibrary.org/subjects/${subject}.json`;

    return this.http.get(SUBJECT_URL, {
      params: {details: "false", limit: "12", sort: "random"}
    }).pipe(
      map((results: any) => {
        return this.mapBooks(results.works) //moi je sais qu'il y a les works
      })
    )

  }

  // !! qualifiers private et public
  private mapBooks(bookResults: any[]): WorkModel[] {
    if (!bookResults) return; //early return, toujours
    return bookResults.map(bookResult => {
      return { //mapper unitaire
        title: bookResult.title,
        key: bookResult.key,
        authors: bookResult.authors, //on pourrait mapper les autheurs avec un map dans author.service
        first_publish_year: bookResult.first_publish_year,
        cover_id:bookResult.cover_id,
      }
    })
  }

  getSearchResults(search: string): Observable<any> {
    const SEARCH_URL: string = `https://openlibrary.org/search.json?q=${search}`;

    return this.http.get(SEARCH_URL);
  }

  getBookDetails(book: BookDetailModel): Observable<any> {
    const QUERY_URL: string = `http://openlibrary.org/query.json?type=/type/edition&works=${book.work_key}&authors&publish_date&description`;
    const SEARCH_URL: string = `https://openlibrary.org/search.json?q=The%20Handmaid%27s%20Tale`;

    return this.http.get(SEARCH_URL);
  }
}
