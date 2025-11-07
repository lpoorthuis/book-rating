import { Routes } from '@angular/router';
import { booksRoutes } from './books/books.routes';
import { NotFoundPage } from './not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  ...booksRoutes,
  { path: '**', component: NotFoundPage }
];
