import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'home-route',
    templateUrl: 'home.route.html'
})
export class HomeRoute implements OnInit {
    array: Array<number> = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ];

    constructor(
    ) { }

    ngOnInit() {
    }
}
