import { Route } from '@angular/router';
import { EssentialsRoute } from './essentials.route';

export const ChildComponents = [
    EssentialsRoute
];

export const ChildRoutes: Route[] = [
    { path: 'essentials', component: EssentialsRoute },
    { path: '', redirectTo: 'essentials', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'essentials', pathMatch: 'prefix' }
]
