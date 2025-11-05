import { Component, input, output } from '@angular/core';
import { Book } from '../models/book';
import { CurrencyPipe } from '@angular/common';
import { RatingDisplay } from "../rating-display/rating-display";

@Component({
  selector: 'app-book-card',
  imports: [CurrencyPipe, RatingDisplay],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  readonly book = input.required<Book>();
  readonly rateUp = output<Book>();
  readonly rateDown = output<Book>();

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }
}
