import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from "../modules/components/books/list/book-list.component";

@Component({
  selector: 'ls-root',
  standalone: true,
  imports: [CommonModule, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Books\' ideas';
}
