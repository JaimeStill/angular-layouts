import {
    Component,
    OnInit
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'rick-and-morty-route',
    templateUrl: 'rick-and-morty.route.html',
    styleUrls: ['rick-and-morty.route.scss']
})
export class RickAndMortyRoute implements OnInit {
    private readonly endpoint: string = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,180';
    data: Observable<any[]>;

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit(): void {
        this.data = this.http.get<any>(this.endpoint);
    }
}
