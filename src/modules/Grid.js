import React from 'react'
import {convertToString} from './Number'


class Grid extends React.Component {
    
    render(){
        let grid = []

        // Horizontal lines
        let distY = Math.round((this.props.maxY + this.props.minY) / 9)
        for(let i = 1; i <= 9; i++){
            let label = ((distY * i < 9999999)?convertToString(distY * i):Math.round(distY * i/1000000) + "M")
            grid.push(<line key={"V"+i} x1={75} y1={50 * i +25} x2={1000} y2={50 * i +25} style={{fill:"none",stroke:"rgb(200, 200, 200)",strokeWidth:1}}></line>)
            grid.push(<text key={"VT"+i} x={(label.length < 6)?label.length*2:5} y={((50 * i)*-1)+6 -25} fontSize="16" style={{transform: "rotateX(-180deg)"}}>{label}</text>)
        }

        // Vertical lines
        let amountH = this.props.numbers;
        this.distX = 900 / this.props.numbers
        for(let i = 2; i <= amountH + 4; i++){
            if ((amountH > 40 && i%5 === 0) || (amountH <= 40)){
            grid.push(<line key={"H"+i} x1={(i * this.distX) - this.distX +75} y1="25" x2={(i * this.distX) - this.distX +75} y2="500" style={{fill:"none",stroke:"rgb(200, 200, 200)",strokeWidth:1}}></line>)
            grid.push(<text key={"VH"+i} x={(i * this.distX) - ((i > 9)?10:5) - this.distX +75} y="-5" fontSize="16" style={{transform: "rotateX(-180deg)"}}>{i}</text>)
            }
        }
        return [
            grid,
            // X axis:
            <line key="-1" x1="75" y1="25" x2="1000" y2="25" style={{fill:"none",stroke:"#00496a",strokeWidth:2}}></line>,
            // Y axis:
            <line key="0" x1="75" y1="25" x2="75" y2="500" style={{fill:"none",stroke:"#00496a",strokeWidth:2}}></line>
        ]
    }
}

export default Grid