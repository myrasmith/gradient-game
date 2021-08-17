import './Square.css'

const Square = ({ color, fixed }) => {
    const backgroundColor = `rgb(${color[0]*255}, ${color[1]*255}, ${color[2]*255})`
    return <div className="Square" style={ { backgroundColor } }>
        {fixed && <div className="fixedDot"></div>}
    </div>
}

export default Square;