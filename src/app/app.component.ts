import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ls-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'books-ideas';
}
