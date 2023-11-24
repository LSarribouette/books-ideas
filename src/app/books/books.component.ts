import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookModel} from '../book/book.modele';
import {BookComponent} from "../book/book.component";

@Component({
  selector: 'ls-books',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Array<BookModel> = [{
    title: "The Handmaid's Tale",
    authors: ["Margaret Atwood"],
    publication_date: "1985"
  }, {
    title: "The Hunger Games",
    authors: ["Suzanne Collins"],
    publication_date: "2008"
  }, {
    title: "Divergent",
    authors: ["Veronica Roth"],
    publication_date: "2010"
  }];

  getDetailsOfBook(book: BookModel): void {
    console.log("Sélection de " + book.title);
  }
}
