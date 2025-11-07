import { Component, computed, input, output } from '@angular/core';
import { Book } from '../shared/book';
import { CurrencyPipe } from '@angular/common';
import { StarRatingPipe } from '../shared/star-rating-pipe';

@Component({
  selector: 'app-book-card',
  imports: [CurrencyPipe, StarRatingPipe ],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  readonly book = input.required<Book>();

  readonly rateUp = output<Book>();
  readonly rateDown = output<Book>();

  readonly rateUpDisabled = computed(() => this.book().rating >= 5);
  readonly rateDownDisabled = computed(() => this.book().rating <= 1);

  doRateUp() {
    this.rateUp.emit(this.book());
  }

  doRateDown() {
    this.rateDown.emit(this.book());
  }
}
