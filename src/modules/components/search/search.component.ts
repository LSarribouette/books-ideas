import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ls-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  search(event: Event) {
    alert("Recherche lancée");
  }
}
