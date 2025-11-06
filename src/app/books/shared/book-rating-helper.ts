import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookRatingHelper {
  rateUp(book: Book): Book {
    book.rating = Math.min(5, book.rating + 1);
    return book;
  } 

  rateDown(book: Book): Book {
    book.rating = Math.max(1, book.rating - 1);
    return book;
  } 
}
