import { Routes } from '@angular/router';
import { homeMatcher } from './shared/functions/home-router-matcher';

export const routes: Routes = [
  {
    matcher: homeMatcher,
    loadComponent: async () => import(`./components/home/home.component`),
  },
  {
    path: `**`,
    redirectTo: ``,
  },
];
