<template>
    <canvas>
    </canvas>
</template>

<style scoped>
canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import {Point, degToRad, drawLine, fromPolar} from "../assets/CanvasUtils"

let ctx : CanvasRenderingContext2D;

let clearCanvasID : number;

const lineRunners : lineRunner[] = [];

const runnerCount = 10;

const framerate = 24;
const delay = 1000/framerate;


class lineRunner {
    id : number;
    R : number;
    K : number;
    theta : number;
    center : Point;
    pos : Point;
    dtheta : number;

    constructor() {
        this.id = -1;
        this.R = (Math.random() * 500) + 500;
        this.K = Math.random() * 2;
        this.center = new Point(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height);
        this.theta = Math.random() * 360;
        this.dtheta = 5;

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
        const newId = setInterval(this.draw.bind(this), delay);
        this.id = newId;
    }

    draw() {
        ctx.strokeStyle = "white";
        const start = this.pos;
        this.theta += this.dtheta;
        const r = this.getr();
        console.log(r);
        console.log(this.theta);
        this.pos = fromPolar(r, this.theta).add(this.center);

        drawLine(start, this.pos, ctx);
    }
}

function initializeRunners() {
    for(let i = 0; i < runnerCount; i++) {
        lineRunners.push(new lineRunner());
    }
}

function startRunners() {
    lineRunners.forEach(runner => {
        runner.start();
    });
}

function stopRunners() {
    lineRunners.forEach(runner => {
        runner.stop();
    });
}

function freeRunners() {
    for(let i = 0; i < runnerCount; i++) {
        lineRunners.pop();
    }
}

function clearCanvas(opacity : number) {
    const pixels = ctx.getImageData(0,0,ctx.canvas.width, ctx.canvas.height);
    
    for(let i = 3; i < pixels.data.length; i+=4) {
        const curA = pixels.data[i];
        if(curA == undefined) return;

        pixels.data[i] = Math.floor(curA * opacity);
    }
    ctx.putImageData(pixels, 0, 0);

}

onMounted(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    if (context)  {
        ctx = context;
        initializeRunners();
        startRunners();
        clearCanvasID = setInterval(clearCanvas, delay, 0.9);
    }
    
});

onUnmounted(() => {
    stopRunners();
    freeRunners();
    clearInterval(clearCanvasID);
});


</script>