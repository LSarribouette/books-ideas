import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDetailModel} from '../book-detail/book-detail.model';
import {BookDetailComponent} from "../book-detail/book-detail.component";
import {BooksListService} from "./books-list.service";

@Component({
    selector: 'ls-books',
    standalone: true,
    imports: [CommonModule, BookDetailComponent],
    templateUrl: './books-list.component.html',
    styleUrl: './books-list.component.css',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent {

    subject: string = "";
    books: Array<BookDetailModel> = [];

    constructor(private booksListService: BooksListService) {
    }

    ngOnInit() {
        this.getRandomBooks();
    }

    getRandomBooks(): void {
        this.books = [];
        this.subject = this.booksListService.getRandomSubject();
        this.getBooksBySubject();
    };

    private getBooksBySubject() {
        this.booksListService.getBooksBySubject(this.subject.replace(' ', '_'))
          .subscribe(result => {
            this.books = this.booksListService.mapWorksToBooks(result.works);
            // this.books = result.works;
            console.log(this.books);
          });
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
