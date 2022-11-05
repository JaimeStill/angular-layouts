import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'box',
    templateUrl: 'box.component.html'
})
export class BoxComponent {
    @Input() color: string | undefined;
    @Input() size: number | string = 8;
    @Input() padding: number | string = 8;
    @Input() margin: number | string = 4;

    setColor = (): string => `background-${this.color}`;
}
