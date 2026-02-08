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

let intervalId : number;

let outerR : number;
let K : number;
let theta : number;
let center : Point;
let pos : Point;
let dtheta : number;
const framerate = 24;

function start(context: CanvasRenderingContext2D) {
    ctx = context;
    const width = context.canvas.width;
    const height = context.canvas.height;

    center = new Point(width / 2, height / 2);
    outerR = (Math.random()*500) + 500;
    K = (Math.random()*10.0);
    theta = 0;
    dtheta = 5;
    const r = (outerR * Math.cos(degToRad * theta * K));
    pos = fromPolar(r, theta).add(center);
}

function draw() {
    ctx.strokeStyle = "white";
    ctx.fillStyle = "rgb(24 24 24 / 0.5)"
    ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
    const start = pos;
    theta += dtheta;
    const r = (outerR * Math.cos(degToRad * theta * K));
    pos = fromPolar(r, theta).add(center);

    drawLine(start, pos, ctx);
}

onMounted(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (intervalId != null) clearInterval(intervalId);
        intervalId = setInterval(draw, 1000/framerate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    if (context) start(context);
});

onUnmounted(() => {
    if (intervalId != null) clearInterval(intervalId);
});
</script>