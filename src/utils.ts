export const calcSpeed = (speed: number, acceleration: number, deltaTime: number): number => {
    return speed + acceleration * deltaTime
}

export const calcDistance = (speed: number, acceleration: number, deltaTime: number): number => {
    return speed * deltaTime + acceleration * deltaTime * deltaTime / 2
}

