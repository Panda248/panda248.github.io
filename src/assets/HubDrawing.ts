import { Drawing } from "./Drawing";
import { LineRunner } from "./LineRunner";
import { clearCanvas } from "./CanvasUtils";

export class HubDrawing extends Drawing{
    clearCanvasID = -1;

    lineRunners : LineRunner[];

    runnerCount : number;

    constructor(framerate=50, runnerCount=10) {
        super(framerate);

        this.runnerCount = runnerCount;
        this.lineRunners = [];
    }

    initializeRunners(context : CanvasRenderingContext2D) {
        for(let i = 0; i < this.runnerCount; i++) {
            this.lineRunners.push(new LineRunner(context, this.delay));
        }
    }

    startRunners() {
        this.lineRunners.forEach(runner => {
            runner.start();
        });
    }

    stopRunners() {
        this.lineRunners.forEach(runner => {
            runner.stop();
        });
    }

    freeRunners() {
        for(let i = 0; i < this.runnerCount; i++) {
            this.lineRunners.pop();
        }
    }  

    onMounted(): void {
        if(this.ctx == undefined) {
            throw new Error("Context not found");
        }
        this.initializeRunners(this.ctx);
        this.startRunners();
        this.clearCanvasID = setInterval(clearCanvas, this.delay, 0.9, this.ctx)
    }
    onUnmounted(): void {
        this.stopRunners();
        this.freeRunners();
        clearInterval(this.clearCanvasID);
    }
    onResized(): void {
        return;
    }
}
