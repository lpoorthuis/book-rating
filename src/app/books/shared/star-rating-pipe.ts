import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

}
