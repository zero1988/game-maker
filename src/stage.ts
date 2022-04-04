export interface StageOptions {
    width?: number
    height?: number
    backgroundColor?: string
    left?: number
    top?: number
}

export default class Stage {
    private _canvas: HTMLCanvasElement = document.createElement('canvas')

    private static _instance: Stage

    private options: StageOptions = {
        width: 800,
        height: 600,
        backgroundColor: '#000000',
        left: 0,
        top: 0
    }

    private constructor(options?: StageOptions) {
        // Object.assign(this.options, options)
        this.options = {
            ...this.options,
            ...options
        }
    }

    static getInstance(options?: StageOptions): Stage {
        if (!this._instance) {
            this._instance = new Stage(options)
        }
        return this._instance
    }

    get width(): number {
        return this.options.width!
    }

    get height(): number {
        return this.options.height!
    }

    run() {
        this._canvas.width = this.options.width!
        this._canvas.height = this.options.height!
        this._canvas.style.backgroundColor = this.options.backgroundColor!
        document.body.appendChild(this._canvas)
    }
}
