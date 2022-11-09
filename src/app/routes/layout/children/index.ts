import {
    LaboratoryComponents,
    LaboratoryRoutes
} from './laboratory';

import { Route } from '@angular/router';
import { EssentialsRoute } from './essentials.route';
import { FlexDirectivesRoute } from './flex-directives.route';

export const ChildComponents = [
    ...LaboratoryComponents,
    EssentialsRoute,
    FlexDirectivesRoute
];

export const ChildRoutes: Route[] = [
    ...LaboratoryRoutes,
    { path: 'essentials', component: EssentialsRoute },
    { path: 'flex-directives', component: FlexDirectivesRoute },
    { path: '', redirectTo: 'essentials', pathMatch: 'prefix' },
    { path: '**', redirectTo: 'essentials', pathMatch: 'prefix' }
]
