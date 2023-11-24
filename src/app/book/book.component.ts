import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookModel} from "./book.modele";

@Component({
  selector: 'ls-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input({required: true}) book!: BookModel;
  @Output() readonly bookSelected = new EventEmitter<BookModel>();

  selectBook() {
    this.bookSelected.emit(this.book);
  }
}
