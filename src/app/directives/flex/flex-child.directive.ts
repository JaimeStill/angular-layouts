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
    private readonly FLEX_DEFAULT = '0 1 auto';

    // align-self
    @Input() flexAlignSelf: FxAlignSelf = 'inherit';
    // flex
    @Input() flex: string = this.FLEX_DEFAULT;

    @Input() canFlex: boolean = true;

    private style = () => this.el.nativeElement.style;

    private setFlex = () => this.style().flex =
        this.canFlex
            ? this.flex
            : this.FLEX_DEFAULT;

    constructor(private el: ElementRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.flexAlignSelf)
            this.style().alignSelf = this.flexAlignSelf;

        if (changes.flex)
            this.setFlex();

        if (changes.canFlex)
            this.setFlex();
    }
}
