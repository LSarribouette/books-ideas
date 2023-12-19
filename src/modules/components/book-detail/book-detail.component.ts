import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDetailModel} from "./book-detail.model";
import {BookDetailService} from "./book-detail.service";

@Component({
  selector: 'ls-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  @Input({required: true}) book!: BookDetailModel;

  constructor(private bookDetailService: BookDetailService) {
  }

  toggleDisplayBook() {
    this.book.selected = !this.book.selected;

    if (this.book.selected) {
      this.getBookDetails(this.book);
    }
  }

  private getBookDetails(book: BookDetailModel) {
    this.bookDetailService.getBookDetail(book).subscribe(x => console.log(x));
  }
}
