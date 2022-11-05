import { Component } from '@angular/core';

@Component({
    selector: 'essentials-route',
    templateUrl: 'essentials.route.html',
    styleUrls: ['essentials.route.scss']
})
export class EssentialsRoute {
    colors: Array<string> = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple'
    ];
}
