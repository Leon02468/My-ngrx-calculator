export interface Cal{
    inputNumber: string,
    screen : number[],
    screenAfterDot : number[],

    oldNumber: number,
    currentNumber: number,
    previousNumber: number,
    result: number,

    plus: boolean,
    minus: boolean,
    multi: boolean,
    div: boolean,

    start_typing: boolean
}