import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookList} from "./book-list.model";
import {BookListService} from "./book-list.service";
import {BookItemComponent} from "../item/book-item.component";

@Component({
  selector: 'ls-book-list',
  standalone: true,
  imports: [CommonModule, BookItemComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  public bookList!: BookList;

  public constructor(private bookListService: BookListService) { }

  public ngOnInit() {
    //- Lazy loading algorithm
    // initialization
    this.bookList = this.bookListService.initBookList();
    // loading random books' list
    this.loadRandomBookList();
  }

  public loadRandomBookList() {
    this.bookListService.loadRandomBookList(this.bookList)
      .subscribe(result => this.bookList.bookItems = result);
  }
}
