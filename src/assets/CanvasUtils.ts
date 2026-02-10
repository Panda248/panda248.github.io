export const radToDeg = 360.0 / 2 * Math.PI;
export const degToRad = 2 * Math.PI / 360.0;


export class Point {
    x : number;
    y : number;
    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }

    add(p : Point) : Point{
        this.x += p.x;
        this.y += p.y;
        return this;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillRect(this.x, this.y, 1, 1);
    }
}

export function fromPolar(r : number, degrees : number): Point {
        const rad = degrees * degToRad;
        return new Point(r * Math.cos(rad), r * Math.sin(rad));
}

export class Line {
    p1 : Point;
    p2 : Point;
    constructor(p1 : Point, p2 : Point) {
        this.p1 = p1;
        this.p2 = p2;
    }

    draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.moveTo(this.p1.x, this.p1.y);
        context.lineTo(this.p2.x, this.p2.y);
        context.stroke();
    }
}

export function drawLine(p0 : Point, p1 : Point, context : CanvasRenderingContext2D) {
    context.beginPath();
    context.moveTo(p0.x, p0.y);
    context.lineTo(p1.x, p1.y);
    context.stroke();
}

export class Rect {
    center: Point;
    width: number;
    height : number;

    constructor(center: Point, width: number, height: number) {
        this.center = center;
        this.width = width;
        this.height = height;
    }

    draw(context : CanvasRenderingContext2D) : void {
        context.fillRect(this.center.x - this.width/2, this.center.y - this.width/2, this.width, this.height);
    }
}

export function clearCanvas(opacity : number, ctx : CanvasRenderingContext2D) {
    const pixels = ctx.getImageData(0,0,ctx.canvas.width, ctx.canvas.height);
    
    for(let i = 3; i < pixels.data.length; i+=4) {
        const curA = pixels.data[i];
        if(curA == undefined) return;

        pixels.data[i] = Math.floor(curA * opacity);
    }
    ctx.putImageData(pixels, 0, 0);

}