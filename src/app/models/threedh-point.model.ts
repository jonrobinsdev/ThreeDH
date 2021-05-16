export class ThreeDHPoint {
    active: boolean = false;
    rank: number | undefined;
    text: string;
    x: number | undefined;
    y: number | undefined;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}