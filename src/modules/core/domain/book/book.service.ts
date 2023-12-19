import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {SubjectResultModel} from "../subject/subject-result.model";
import {WorkModel} from "../work/work.model";
import {BookDetailModel} from "../../../components/book-detail/book-detail.model";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    // private url = "https://openlibrary.org/works/OL675783W.json";
    private subjectUrl = "https://openlibrary.org/subjects/";

    constructor(private http: HttpClient) {
    }

    // getData(): Observable<any> {
    //   return this.http.get(this.url);
    // }

    getBooksBySubject(subject: string): Observable<any> {

        const SUBJECT_URL: string = `https://openlibrary.org/subjects/${subject}.json`;

        return this.http.get(SUBJECT_URL,{
            params: {details: "false", limit: "12", sort: "random"}})
        ;

    }

    getBookDetails(book: BookDetailModel): Observable<any> {

        const QUERY_URL: string = `http://openlibrary.org/query.json?type=/type/edition&works=${book.work_key}&authors&publish_date&description`;
        const SEARCH_URL: string = `https://openlibrary.org/search.json?q=The%20Handmaid%27s%20Tale`;

        return this.http.get(SEARCH_URL);
    }
}
