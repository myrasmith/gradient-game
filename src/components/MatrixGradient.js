import { colorBetween } from "../util/linearPath"
import LinearGradient from "./LinearGradient"

const MatrixGradient = ({ upperLeft, lowerLeft, upperRight, lowerRight, width, height}) => {
    const linGrads = new Array(height)
        .fill(0)
        .map((_, i) => [
            colorBetween(upperLeft, lowerLeft, i/(height-1)),
            colorBetween(upperRight, lowerRight, i/(height-1))
        ])

    return <div className="MatrixGradient">
        {linGrads.map(([start, end], i) => <LinearGradient key={i} start={start} end={end} length={width}/>)}
    </div>
}

export default MatrixGradient