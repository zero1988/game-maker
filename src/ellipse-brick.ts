import { Brick, BrickOptions } from "./brick"

export class EllipseBrick extends Brick {
    constructor(options?: BrickOptions) {
        super(options)
    }

    render(context: CanvasRenderingContext2D) {
        if (context) {
            context.beginPath()
            context.fillStyle = this.options.backgroundColor
            context.ellipse(this.options.left + this.options.width / 2,
                this.options.top + this.options.height / 2,
                this.options.width / 2,
                this.options.height / 2, 0, 0, 2 * Math.PI)
            context.fill()
            context.closePath()

        }
    }
}