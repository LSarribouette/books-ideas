import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDetailModel} from '../book-detail/book-detail.model';
import {BookDetailComponent} from "../book-detail/book-detail.component";
import {BooksListService} from "./books-list.service";

@Component({
  selector: 'ls-books',
  standalone: true, //nouvelle syntaxe : à la place des modules ? puisque un comp=un module
  imports: [CommonModule, BookDetailComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent {
  // !! qualifiers private et public = pas facultatif

  //modèle de données : BookList.model
  // element de mon composant
  //cote service : initBookList qui me retourne les objets initialisés ocmme ça
  //                loadBookList aussi
  // public subject = ""; //self explanatory : pas besoin de préciser le type si affectation évidente
  // public search = "";
  // public books: BookDetailModel[] = [];

  public bookList: BookList;

  constructor(private booksListService: BooksListService) {
  }

  //tout ce dont j'ai besoin !
  ngOnInit() {
    //lazy loading algorithm
    this.bookList = this...initBookList()
    loadBookList().subscribe(newBookList => {
      this.bookList = newBookList
    })
    // this.getRandomBooks();
  }

  //je get pas, je initRandomBook
  //pas pure car this.machin
  //pure = stable
  getRandomBooks(): void {
    this.books = [];
    this.subject = this.booksListService.getRandomSubject();
    this.getBooksBySubject();
  };

  // loadBookBySubj
  //- get si je retourne un truc
  private getBooksBySubject() {
    this.booksListService.getBooksBySubject(this.subject.replace(' ', '_'))
      .subscribe(result => {
        this.books = this.booksListService.mapWorksToBooks(result.works);
        // this.books = result.works;
        console.log(this.books);
      });
  }

  getSearchResults(search: string) {
    // this.books = [];
    this.search = search;
    console.log("Recherche : " + this.search);
    this.booksListService.getSearchResults(this.search).subscribe(result => {
      // this.books = this.booksListService.mapWorksToBooks(result.works);
      console.log(result);
    })
  }

  // subject: string = this.subjectService.subject;

  // constructor(
  //     private booksListService: BooksListService,
  //     // private subjectService: SubjectService,
  //     // private cdr: ChangeDetectorRef
  // ) { }

  // ngOnInit(): void {
  //     // this.getData();
  //     this.getBooksBySubject(this.subject);
  // }

  // ngOnChange(): void {
  //     this.getBooksBySubject(this.subject);
  //     console.log("changement sujet")
  // }

  // getBooks(): void {
  //   this.booksListService.getBooks()
  //     .subscribe(books => this.books = books);
  // }
  // getData(): void {
  //     this.booksListService.getData().subscribe(res => console.log(res));
  // }

  // getBooksBySubject(): void {
  //     // this.booksListService.getBooksBySubject().subscribe(res => {
  //     //     console.log(res);
  //     //     // this.cdr.markForCheck();
  //     // });
  //     console.log("BooksListComponent");
  // }

  // getBooksBySearch(search: string): void {
  //     console.log("recherche");
  // }


}
