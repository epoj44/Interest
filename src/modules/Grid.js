import React from 'react'
import {convertToString} from './Number'


class Grid extends React.Component {
    
    render(){
        let grid = []

        // Horizontal lines
        let distY = Math.round((this.props.maxY + this.props.minY) / 9)
        for(let i = 1; i <= 9; i++){
            grid.push(<text key={"VT"+i} x={5} y={((50 * i)*-1)+6} fontSize="16" style={{transform: "rotateX(-180deg)"}}>{convertToString(distY * i)}</text>)
            grid.push(<line key={"V"+i} x1={0} y1={50 * i} x2={1000} y2={50 * i} style={{fill:"none",stroke:"gray",strokeWidth:0.25}}></line>)
        }

        // Vertical lines
        let amountH = this.props.numbers;
        this.distX = 900 / this.props.numbers
        for(let i = 1; i <= amountH + 4; i++){
            if ((amountH > 40 && i%5 === 0) || (amountH <= 40)){
            grid.push(<text key={"VH"+i} x={(i * this.distX) - ((i > 9)?10:5) - this.distX} y="-5" fontSize="16" style={{transform: "rotateX(-180deg)"}}>{i}</text>)
            grid.push(<line key={"H"+i} x1={(i * this.distX) - this.distX} y1="0" x2={(i * this.distX) - this.distX} y2="500" style={{fill:"none",stroke:"gray",strokeWidth:0.25}}></line>)
            }
        }
        return [
            // X axis:
            <line key="-1" x1="0" y1="0" x2="1000" y2="0" style={{fill:"none",stroke:"gray",strokeWidth:2}}></line>,
            // Y axis:
            <line key="0" x1="0" y1="0" x2="0" y2="500" style={{fill:"none",stroke:"gray",strokeWidth:2}}></line>,
            grid    
        ]
    }
}

export default Grid