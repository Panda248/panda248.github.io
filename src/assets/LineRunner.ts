import {Point, degToRad, drawLine, fromPolar} from "../assets/CanvasUtils"

export class LineRunner {
    id : number;
    R : number;
    K : number;
    theta : number;
    center : Point;
    pos : Point;
    dtheta : number;
    ctx : CanvasRenderingContext2D;
    delay : number

    constructor(context : CanvasRenderingContext2D, delay : number) {
        this.id = -1;
        this.ctx = context;
        this.delay = delay;

        this.R = (Math.random() * 500) + 500;
        this.K = Math.random() * 2;
        this.center = new Point(Math.random() 
                                * this.ctx.canvas.width, Math.random() 
                                * this.ctx.canvas.height);
        this.theta = Math.random() * 360;
        this.dtheta = 3;
        
        const r = this.getr();
        this.pos = fromPolar(r, this.theta).add(this.center);
    }
    
    getr() : number {
        return (this.R * Math.cos(degToRad * this.theta * this.K));
    }

    stop() {
        if(this.id > 0) {
            clearInterval(this.id);
        }
    }

    start() {
        const newId = setInterval(this.draw.bind(this), this.delay);
        this.id = newId;
    }

    draw() {
        this.ctx.strokeStyle = "white";
        const start = this.pos;
        this.theta += this.dtheta;
        const r = this.getr();

        this.pos = fromPolar(r, this.theta).add(this.center);

        drawLine(start, this.pos, this.ctx);
    }
}