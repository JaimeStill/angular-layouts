import { Component } from '@angular/core';

import {
    FlexTypeValues,
    FxAlign,
    FxAlignSelf,
    FxCross,
    FxDirection,
    FxMain,
    FxWrap
} from '../../../types/flex';

@Component({
    selector: 'flex-directives-route',
    templateUrl: 'flex-directives.route.html',
    styleUrls: ['flex-directives.route.scss']
})
export class FlexDirectivesRoute {
    values = FlexTypeValues;

    headerAlign: FxAlignSelf = 'center';
    flex: string = '0 1 auto';
    direction: FxDirection = 'row';
    wrap: FxWrap = 'nowrap';
    main: FxMain = 'flex-start';
    cross: FxCross = 'stretch';
    align: FxAlign = 'normal';
    gap: string = '4px';

    ngOnInit(): void {
        console.log(this.headerAlign);
    }

    colors: Array<string> = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple'
    ];

    getColor = (color: string) => `background-${color}`;
}
