import { Component } from '@angular/core';

@Component({
    selector: 'laboratory-route',
    templateUrl: 'laboratory.route.html',
    styleUrls: ['laboratory.route.scss']
})
export class LaboratoryRoute {
    routes: string[] = [
        'picsum',
        'rick-and-morty'
    ];

    expanded: boolean = true;

    toggleExpanded = () => this.expanded = !this.expanded;
}
