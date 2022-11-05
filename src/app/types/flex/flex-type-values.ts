export class FlexTypeValues {
    static fxAlign = [
        'normal',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch'
    ] as const;

    static fxAlignSelf = [
        'inherit',
        'auto',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'stretch'
    ] as const;

    static fxCross = [
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'baseline'
    ] as const;

    static fxDirection = [
        'row',
        'row-reverse',
        'column',
        'column-reverse'
    ] as const;

    static fxMain = [
        'flex-start',
        'flex-end',
        'start',
        'end',
        'left',
        'right',
        'center',
        'space-between',
        'space-around',
        'space-evenly'
    ] as const;

    static fxWrap = [
        'nowrap',
        'wrap',
        'wrap-reverse'
    ] as const;
}
