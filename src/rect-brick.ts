import { Brick, BrickOptions } from "./brick"

export class RectBrick extends Brick {
    constructor(options?: BrickOptions) {
        super(options)
    }

    render(context: CanvasRenderingContext2D) {
        if (context) {
            context.fillStyle = this.options.backgroundColor
            context.fillRect(this.options.left, this.options.top, this.options.width, this.options.height)
        }
    }
}