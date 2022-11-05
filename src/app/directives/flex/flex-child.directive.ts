import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';

import { FxAlignSelf } from '../../types/flex';

@Directive({
    selector: '[flexChild]'
})
export class FlexChildDirective implements OnChanges {
    // align-self
    @Input() flexAlignSelf: FxAlignSelf = 'inherit';
    // flex
    @Input() flex: string = '0 1 auto';

    private style = () => this.el.nativeElement.style;

    constructor(private el: ElementRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.flexAlignSelf)
            this.style().alignSelf = this.flexAlignSelf;

        if (changes.flex)
            this.style().flex = this.flex;
    }
}
