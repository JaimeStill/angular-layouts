import { Route } from '@angular/router';
import { LaboratoryRoute } from './laboratory.route';
import { PicsumRoute } from './picsum.route';
import { RickAndMortyRoute } from './rick-and-morty.route';

export const LaboratoryComponents = [
    LaboratoryRoute,
    RickAndMortyRoute
];

export const LaboratoryRoutes: Route[] = [
    {
        path: 'laboratory',
        component: LaboratoryRoute,
        children: [
            { path: 'picsum', component: PicsumRoute },
            { path: 'rick-and-morty', component: RickAndMortyRoute },
            { path: '', redirectTo: 'picsum', pathMatch: 'prefix' },
            { path: '**', redirectTo: 'picsum', pathMatch: 'prefix' }
        ]
    }
]
