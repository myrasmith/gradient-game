import Square from "./Square"
import "./LinearGradient.css"
import { colorBetween } from "../util/linearPath"

const LinearGradient = ({ start, end, length }) => {
    const colors = new Array(length)
        .fill(0)
        .map((_, i) => colorBetween(start, end, i/(length - 1)))

    return <div className="LinearGradient">
        {colors.map((color, i) => {
            return <Square key={i} color={color} fixed/>
        })}
    </div>
}

export default LinearGradient