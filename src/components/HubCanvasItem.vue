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
import type { Drawing } from '@/assets/Drawing';
import { HubDrawing } from '@/assets/HubDrawing';
import { onMounted, onUnmounted } from 'vue';

let drawing : Drawing;

onMounted(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    drawing = new HubDrawing();
    

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawing.onResized();
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    
    if (context)  {
        drawing.setContext(context);
        drawing.onMounted();
    }
});

onUnmounted(() => {
    drawing.onUnmounted();
});
</script>