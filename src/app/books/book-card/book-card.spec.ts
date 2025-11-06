import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCard } from './book-card';
import { inputBinding, provideZonelessChangeDetection, signal } from '@angular/core';
import { Book } from '../shared/book';

describe('BookCard', () => {
  let component: BookCard;
  let fixture: ComponentFixture<BookCard>;
  let testBook = signal<Book>({
    title: '',
    description: '',
    isbn: '',
    price: 1,
    rating: 1
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
      imports: [BookCard],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCard, {
      bindings: [
        inputBinding('book', () => testBook)
      ]
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
