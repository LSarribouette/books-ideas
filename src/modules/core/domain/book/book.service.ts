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

    // getBooksBySubject(subject: string): Observable<any> {
    //   return this.http.get(this.subjectUrl+subject+'.json', {
    //     params: {details: "false", limit:"12", sort:"random"
    //     }}).pipe(this.mapWorkToBook());
    // }

    //--- GET
    getBooksBySubject(subject: string): Observable<any> {

        const SUBJECT_URL: string = `https://openlibrary.org/subjects/${subject}.json`;

        return this.http.get(SUBJECT_URL,{
            params: {details: "false", limit: "12", sort: "random"}})
        ;

    }

    // //--- MAP
    // private mapWorkToBook(work: WorkModel): BookDetailModel {
    //
    //     const coverUrl: string = `https://covers.openlibrary.org/b/id/${work.cover_id.toString()}-L.jpg`;
    //
    //     return {
    //         title: work.title,
    //         authors: work.authors,
    //         first_publish_year: work.first_publish_year.toString(),
    //         cover: work.cover_id.toString(),
    //         open_library_url: coverUrl,
    //         selected: false
    //     }
    // }

    completeBook(book: BookDetailModel): BookDetailModel {
        return book;
    }
}
