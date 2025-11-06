import { TestBed } from '@angular/core/testing';

import { BookRatingHelper } from './book-rating-helper';
import { provideZonelessChangeDetection } from '@angular/core';
import { Book } from './book';

describe('BookRatingHelper', () => {
  let service: BookRatingHelper;

  let testBook: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(BookRatingHelper);
  
    testBook = {
    isbn: '',
    title: '',
    description: '',
    price: 30,
    rating: 0,
  }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increase rating by one', () => {
    testBook.rating = 0;  
    const ratedBook = service.rateUp(testBook);
    expect(ratedBook.rating).toBe(1);
  });

  it('should decrease rating by one', () => {
    testBook.rating = 3;  
    const ratedBook = service.rateDown(testBook);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not exceed upper limit of 5', () => {
    testBook.rating = 5;  
    const ratedBook = service.rateUp(testBook);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not exceed lower limit of 0', () => {
    testBook.rating = 1;  
    const ratedBook = service.rateDown(testBook);
    expect(ratedBook.rating).toBe(1);
  });
});
