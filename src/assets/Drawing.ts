export class Drawing {
   ctx : CanvasRenderingContext2D | undefined;
   delay : number;
   

   constructor(framerate=50) {
      this.ctx = undefined;
      this.delay = 1000 / framerate;
   }

   setContext(context : CanvasRenderingContext2D) {
      this.ctx = context;
   }

   onMounted() : void {
      throw new Error("Method Not Implemented");
   }
   onUnmounted() : void {
      throw new Error("Method Not Implemented");
   }
   onResized() : void {
      throw new Error("Method Not Implemented");
   }
}