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
import { onMounted } from 'vue';

function draw(context: CanvasRenderingContext2D) {
    const width = context.canvas.width;
    const height = context.canvas.height;

    // Clear the canvas
    context.clearRect(0, 0, width, height);

    // Draw a simple pattern (e.g., diagonal lines)
    context.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    context.lineWidth = 1;

    for (let i = -height; i < width; i += 20) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i + height, height);
        context.stroke();
    }
}

onMounted(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (context) draw(context);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    if (context) {
        draw(context);
    }
});
</script>