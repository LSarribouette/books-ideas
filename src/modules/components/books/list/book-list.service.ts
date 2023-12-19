import {Injectable} from "@angular/core";
import {BookList, PredefinedSubject} from "./book-list.model";
import {map, Observable} from "rxjs";
import {BookService} from "../../../core/domain/book/book.service";
import {BookItemService} from "../item/book-item.service";

@Injectable({
  providedIn: "root"
})
export class BookListService {
  public constructor(
    private bookService: BookService,
    private bookItemService: BookItemService
  ) { }

  public initBookList(): BookList {
    return {
      bookItems: [],
      subject: "",
      searchValue: "",
    }
  }

  public loadRandomBookList(currentState: BookList): Observable<any> {
    let newState = currentState;
    newState.subject = this.pickRandomSubject();
    return this.bookService.getRandomBookList(newState.subject.replace(' ', '_'))
      // je mappe le résultat de ma requête Book[] en mon modèle élément BookItem[]
      .pipe(
        map(books => {
          return this.bookItemService.mapBookItems(books);
        })
      )
      ;
  }

  private pickRandomSubject(): PredefinedSubject {
    const subjects: PredefinedSubject[] = [
      'climate change', 'science', 'languages', 'comedy', 'history', 'geography', 'literature', 'education', 'dystopias', 'culture'
    ];
    let randomIndex = Math.floor(Math.random() * (subjects.length));
    return subjects[randomIndex];
  }
}
