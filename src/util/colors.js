export const colorBetween = (c1, c2, dist) => {
    const s = c1.map(value => (1 - dist)*value)
    const e = c2.map(value => dist*value)
    return s.map((value, i) => value + e[i])
}

// TODO: complete createSolution
export const createSolution = (
    upperLeft,
    upperRight,
    lowerLeft,
    lowerRight,
    width,
    height
) => {}

// TODO: complete shuffle
export const shuffle = (board, fixedPositions) => {}
