import {Injectable} from "@angular/core";
import {Book} from "../../../core/domain/book/book.model";
import {BookItem} from "./book-item.model";

@Injectable({
  providedIn: "root"
})
export class BookItemService {
  public mapBookItems(books: Book[]): BookItem[] {
    return books.map(this.mapBookItem);
  }

  private mapBookItem(book: Book): BookItem {
    return {
      title: book.title,
      authors: book.authors,
      first_publish_year: book.first_publish_year,
      cover_url: book.cover_url,
      url_open_library: book.url_open_library,
    }
  }
}
