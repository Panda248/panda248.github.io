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

<script lang="ts">
import { Drawing } from '@/assets/Drawing';

let drawingInstance : Drawing;
export default {
    props : {
        drawingInstance :{
            type : Drawing,
            required : true
        } 
    },
    setup(props) {
        drawingInstance = props.drawingInstance;
    },
    mounted() {
        const canvas = document.querySelector('canvas') as HTMLCanvasElement;
        const context = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawingInstance.onResized();
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        if (context)  {
            drawingInstance.setContext(context);
            drawingInstance.onMounted();
        }
    },
    unmounted() {
        drawingInstance.onUnmounted();
    }
}
</script>