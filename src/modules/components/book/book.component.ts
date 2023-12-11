import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookModel} from "./book.model";

@Component({
  selector: 'ls-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input({required: true}) book!: BookModel;

  toggleDisplayBook() {
    this.book.selected = !this.book.selected;
  }
}
