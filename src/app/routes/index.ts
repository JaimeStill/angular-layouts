import { Route } from '@angular/router';

import {
    LayoutComponents,
    LayoutRoutes
} from './layout';

export const RouteComponents = [
  ...LayoutComponents
]

export const Routes: Route[] = [
    ...LayoutRoutes,
    { path: '', redirectTo: 'layouts', pathMatch: 'full' },
    { path: '**', redirectTo: 'layouts', pathMatch: 'full' }
]
