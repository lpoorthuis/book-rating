import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookStore } from '../shared/book-store';
import { Book } from '../shared/book';
import { StarRatingPipe } from '../shared/star-rating-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-book-details-page',
  imports: [RouterLink, StarRatingPipe, CurrencyPipe ],
  templateUrl: './book-details-page.html',
  styleUrl: './book-details-page.scss',
})
export class BookDetailsPage {
  #route = inject(ActivatedRoute);
  #store = inject(BookStore);

  protected book = signal<Book | undefined>(undefined)

  constructor() {
    this.#route.paramMap.subscribe(params => {
      const isbn = params.get("isbn");
      if (isbn !== null) {
        this.#store.getBook(isbn).subscribe(retrievedBook => {
          this.book.set(retrievedBook)
        });
      }
    });
  }
}
