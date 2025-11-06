import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPage } from './dashboard-page';
import { provideZonelessChangeDetection } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingHelper } from '../shared/book-rating-helper';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async () => {

    const ratingHelperMock = {
      rateUp : (b: Book) => b,
      rateDown : (b: Book) => b,
    }

    await TestBed.configureTestingModule({
      imports: [DashboardPage],
      providers: [
        provideZonelessChangeDetection(),
        { provide: BookRatingHelper, useValue: ratingHelperMock},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component.doRateUp() calls helper.rateUp()', () => {
    const helper = TestBed.inject(BookRatingHelper);

    spyOn(helper, 'rateUp').and.callThrough();

    const testBook = { isbn: '123' } as Book;

    component.doRateUp(testBook)

    expect(helper.rateUp).toHaveBeenCalled()
  });
});
