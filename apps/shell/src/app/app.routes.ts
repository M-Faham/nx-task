import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'table',
    loadComponent: () =>
      loadRemoteModule('table', './Component').then((m) => m.App),
  },
  {
    path: 'data',
    loadComponent: () =>
      loadRemoteModule('data', './Component').then((m) => m.App),
  },
];
