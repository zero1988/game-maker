import { EllipseBrick } from './ellipse-brick'
import { RectBrick } from './rect-brick'
import Stage from './stage'

const game = Stage.getInstance({
    backgroundColor: 'red',
})
game.addBrick(new EllipseBrick({
    backgroundColor: 'blue',
    left: 200,
}))
game.addBrick(new RectBrick())


game.run()
