import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ``,
    loadComponent: async () => import(`./components/home/home.component`),
  },
];
