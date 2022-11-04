import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'box',
    templateUrl: 'box.component.html',
    styles: [
        `
        div.box {
            width: 8rem;
            height: 8rem;
        }
        `
    ]
})
export class BoxComponent {
    @Input() color: string | undefined;

    setColor = (): string => `background-${this.color}`;
}
