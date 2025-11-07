import { Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from '../book-card/book-card';
import { BookRatingHelper } from '../shared/book-rating-helper';
import { BookStore } from '../shared/book-store';

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {
  #bookRatingHelper = inject(BookRatingHelper);
  #store = inject(BookStore);

  protected readonly books = this.#store.getAllResources();

  constructor() {
    //#his.#store.getAllResources().reload(receivedBooks => this.books.set(receivedBooks));
  }

  doRateUp(book: Book) {
    const ratedBook = this.#bookRatingHelper.rateUp(book);
    this.#updateBooks(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.#bookRatingHelper.rateDown(book);
    this.#updateBooks(ratedBook);
  }

  #updateBooks(book: Book) {
    this.books.update((books) => {
      return books.map((mappedBook) => (mappedBook.isbn == book.isbn ? book : mappedBook));
    });
  }
}
