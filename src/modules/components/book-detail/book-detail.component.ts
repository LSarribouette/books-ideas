import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDetailModel} from "./book-detail.model";

@Component({
  selector: 'ls-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  @Input({required: true}) book!: BookDetailModel;

  toggleDisplayBook() {
    this.book.selected = !this.book.selected;
  }
}
