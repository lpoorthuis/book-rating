import { Component, signal } from '@angular/core';
import { Book } from '../models/book';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {
  protected readonly books = signal<Book[]>([])

  constructor() {
    this.books.set([
      {
        isbn: '9780134494166',
        title: 'Clean Code',
        description: 'A Handbook of Agile Software Craftsmanship',
        price: 45.99,
        rating: 1
      },
      {
        isbn: '9781617294136',
        title: 'Angular in Action',
        description: 'Learn Angular from the ground up with practical examples',
        price: 39.99,
        rating: 4
      },
      {
        isbn: '9781491954249',
        title: 'TypeScript Quickly',
        description: 'Learn TypeScript by building real-world applications',
        price: 42.50,
        rating: 4
      },
      {
        isbn: '9780132350884',
        title: 'Clean Architecture',
        description: 'A Craftsman\'s Guide to Software Structure and Design',
        price: 48.75,
        rating: 1
      },
      {
        isbn: '9781492056300',
        title: 'Learning RxJS',
        description: 'Reactive Programming with Observables and Operators',
        price: 35.99,
        rating: 3
      }
    ])
  }

  doRateUp(book: Book) {
    this.books.update(books => {
      let foundBook = books.find( b => b.isbn === book.isbn)
      if (foundBook) {
        foundBook.rating = Math.min(5, foundBook.rating + 1);
      }
      return books;
  });
  }
  
  doRateDown(book: Book) {
    this.books.update(books => {
      let foundBook = books.find( b => b.isbn === book.isbn)
      if (foundBook) {
        foundBook.rating = Math.max(1, foundBook.rating - 1);
      }
      return books;
  });
  }
}
