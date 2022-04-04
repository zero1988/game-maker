import Stage from './stage'

const game = Stage.getInstance({
    backgroundColor: 'green',
})
game.run()

console.log(game.width)
console.log(game.height)
