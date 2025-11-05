import { Component, input } from '@angular/core';

@Component({
  selector: 'app-rating-display',
  imports: [],
  templateUrl: './rating-display.html',
  styleUrl: './rating-display.scss',
})
export class RatingDisplay {
  readonly rating = input.required<number>();

  starRating(): string {
    return '★'.repeat(this.rating()) + '☆'.repeat(5 - this.rating());
   }

}
