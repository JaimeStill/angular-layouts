import { Component } from '@angular/core';

@Component({
    selector: 'home-route',
    templateUrl: 'home.route.html',
    styleUrls: ['home.route.scss']
})
export class HomeRoute {
    colors: Array<string> = [
        'red',
        'purple',
        'blue',
        'green',
        'yellow',
        'orange'
    ];
}
