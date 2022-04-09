export interface BrickOptions {
    width?: number
    height?: number
    left?: number
    top?: number
    backgroundColor?: string
    enableGravity?: boolean
    speedX?: number
    speedY?: number
}

export abstract class Brick {

    protected _context: CanvasRenderingContext2D

    protected options: BrickOptions = {
        width: 100,
        height: 100,
        left: 0,
        top: 0,
        backgroundColor: 'orange',
        enableGravity: true,
        speedX: 0,
        speedY: 0,
    }

    constructor(options?: BrickOptions) {
        Object.assign(this.options, options)
    }

    get enableGravity() {
        return this.options.enableGravity
    }

    get speedX(): number {
        return this.options.speedX
    }

    get speedY(): number {
        return this.options.speedY
    }

    set speedY(speedY: number) {
        this.options.speedY = speedY
    }

    get top(): number {
        return this.options.top
    }

    set top(top: number) {
        this.options.top = top
    }

    get height(): number {
        return this.options.height
    }

    set height(height: number) {
        this.options.height = height
    }


    abstract render(context: CanvasRenderingContext2D): void
}   