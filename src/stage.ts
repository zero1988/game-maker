import { Brick } from './brick'
import { calcDistance } from './utils'

export interface StageOptions {
    width?: number
    height?: number
    backgroundColor?: string
    left?: number
    top?: number
    gravity?: number
    fps?: number
}

export default class Stage {
    private _canvas: HTMLCanvasElement = document.createElement('canvas')

    private _context: CanvasRenderingContext2D = this._canvas.getContext('2d')

    private static _instance: Stage

    private _bricks: Brick[] = []

    private options: StageOptions = {
        width: 800,
        height: 600,
        backgroundColor: '#000000',
        left: 0,
        top: 0,
        gravity: 0.1,
        fps: 60
    }

    private constructor(options?: StageOptions) {
        Object.assign(this.options, options)
    }

    static getInstance(options?: StageOptions): Stage {
        if (!this._instance) {
            this._instance = new Stage(options)
        }
        return this._instance
    }

    get gravity(): number {
        return this.options.gravity
    }

    get width(): number {
        return this.options.width
    }

    get height(): number {
        return this.options.height
    }

    run() {
        this._canvas.width = this.options.width!
        this._canvas.height = this.options.height!
        this._canvas.style.backgroundColor = this.options.backgroundColor!
        this._context.save()
        document.body.appendChild(this._canvas)

        this.render()
    }

    addBrick(brick: Brick) {
        this._bricks.push(brick)
    }

    private render() {
        setInterval(() => {

            this._context.clearRect(0, 0, this.width, this.height)
            this._bricks.forEach(brick => {

                // 判断是否到达边界
                if (this.checkBottomBoundary(brick)) {
                    brick.top = this.height - brick.height
                } else {
                    if (brick.enableGravity && this.gravity != 0) {
                        brick.top += calcDistance(brick.speedY, this.gravity, 1)
                        brick.speedY += this.gravity
                    }
                }
                brick.render(this._context)

            })

        }, 1000 / this.options.fps!)
    }

    private checkBottomBoundary(brick: Brick): boolean {
        return brick.top + brick.height >= this.height
    }

}
