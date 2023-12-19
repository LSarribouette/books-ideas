import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookItem} from "./book-item.model";

@Component({
  selector: 'ls-book-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  @Input({required: true}) book!: BookItem;
}
