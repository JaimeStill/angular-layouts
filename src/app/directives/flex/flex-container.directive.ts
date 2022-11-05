import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';

import {
    FxDirection,
    FxWrap,
    FxMain,
    FxCross,
    FxAlign
} from '../../types/flex';

@Directive({
    selector: '[flexContainer]'
})
export class FlexContainerDirective implements OnChanges {
    // flex-direction
    @Input() flexDirection: FxDirection = 'row';
    // flex-wrap
    @Input() flexWrap: FxWrap = 'nowrap';
    // justify-content
    @Input() flexMain: FxMain = 'flex-start';
    // align-items
    @Input() flexCross: FxCross = 'stretch';
    // align-content
    @Input() flexAlign: FxAlign = 'stretch';
    // gap
    @Input() flexGap: string = 'normal';

    private style = () => this.el.nativeElement.style;

    constructor(private el: ElementRef) {
        this.style().display = 'flex';
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.flexDirection)
            this.style().flexDirection = this.flexDirection;

        if (changes.flexWrap)
            this.style().flexWrap = this.flexWrap;

        if (changes.flexMain)
            this.style().justifyContent = this.flexMain;

        if (changes.flexCross)
            this.style().alignItems = this.flexCross;

        if (changes.flexAlign)
            this.style().alignContent = this.flexAlign;

        if (changes.flexGap)
            this.style().gap = this.flexGap;
    }
}
