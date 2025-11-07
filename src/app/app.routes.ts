import { Routes } from '@angular/router';
import { NotFoundPage } from './not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },

  {
    path: 'books',
    loadChildren: () => import('./books/books.routes').then((routes) => routes.booksRoutes),
  },

  { path: '**', component: NotFoundPage },
];
