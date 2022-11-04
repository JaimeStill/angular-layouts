import { Route } from '@angular/router';
import { LayoutRoute } from './layout.route';

import {
    ChildComponents,
    ChildRoutes
} from './children';

export const LayoutComponents = [
    ...ChildComponents,
    LayoutRoute
]

export const LayoutRoutes: Route[] = [
    { path: 'layouts', component: LayoutRoute, children: ChildRoutes }
]
