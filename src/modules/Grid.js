import React from 'react'
import {convertToString} from './Number'


class Grid extends React.Component {
    
    render(){
        let grid = []

        // Horizontal lines
        let distY = Math.round((this.props.maxY + this.props.minY) / 9)
        for(let i = 1; i <= 9; i++){
            grid.push(<line key={"V"+i} x1={0} y1={50 * i +25} x2={1000} y2={50 * i +25} style={{fill:"none",stroke:"rgb(200, 200, 200)",strokeWidth:1}}></line>)
            grid.push(<text key={"VT"+i} x={5} y={((50 * i)*-1)+6 -25} fontSize="16" style={{transform: "rotateX(-180deg)"}}>{convertToString(distY * i)}</text>)
        }

        // Vertical lines
        let amountH = this.props.numbers;
        this.distX = 900 / this.props.numbers
        for(let i = 2; i <= amountH + 4; i++){
            if ((amountH > 40 && i%5 === 0) || (amountH <= 40)){
            grid.push(<line key={"H"+i} x1={(i * this.distX) - this.distX} y1="25" x2={(i * this.distX) - this.distX} y2="500" style={{fill:"none",stroke:"rgb(200, 200, 200)",strokeWidth:1}}></line>)
            grid.push(<text key={"VH"+i} x={(i * this.distX) - ((i > 9)?10:5) - this.distX} y="-5" fontSize="16" style={{transform: "rotateX(-180deg)"}}>{i}</text>)
            }
        }
        return [
            grid,
            // X axis:
            <line key="-1" x1="0" y1="25" x2="1000" y2="25" style={{fill:"none",stroke:"black",strokeWidth:2}}></line>,
            // Y axis:
            <line key="0" x1="1" y1="25" x2="1" y2="500" style={{fill:"none",stroke:"black",strokeWidth:2}}></line>
        ]
    }
}

export default Grid