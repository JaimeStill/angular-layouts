import { Route } from '@angular/router';
import { EssentialsRoute } from './essentials.route';
import { FlexDirectivesRoute } from './flex-directives.route';

export const ChildComponents = [
    EssentialsRoute,
    FlexDirectivesRoute
];

export const ChildRoutes: Route[] = [
    { path: 'essentials', component: EssentialsRoute },
    { path: 'flex-directives', component: FlexDirectivesRoute },
    { path: '', redirectTo: 'essentials', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'essentials', pathMatch: 'prefix' }
]
