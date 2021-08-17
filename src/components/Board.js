const Board =  ({
    upperLeft,
    upperRight,
    lowerLeft,
    lowerRight,
    width,
    height,
    fixedPositions
}) => {

    /* State:
        board: mutli-dim array of colors
        selected: coordinates of actively selected square
        lastSwapped: array containing two coordinates of the most recently swapped squares

    */

    // TODO: memoize this
    const solution = createSolution(
        upperLeft,
        upperRight,
        lowerLeft,
        lowerRight,
        width,
        height
    );



    return <div>Coming soon!</div>
}

export default Board