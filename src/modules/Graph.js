import React from 'react'
import Grid from './Grid'
import {convertToString} from './Number'

class Graph extends React.Component {

    render(){
        let datums
        let endline
        let endpoint
        if (this.props.data !== undefined){
            this.length = this.props.data.length;
            this.maxY = Math.max(this.props.data[this.props.data.length -1].total)
            this.minY = Math.max(this.props.data[0].total)

            let distY = (this.maxY + this.minY) / 9
            distY = Math.round(distY)
            this.distX = 900 / this.props.data.length

            datums = this.props.data
            .filter((datum, index) => index < this.props.data.length-1)
            .map((datum, index) => {
                return <line
                            key={index}
                            index={index}
                            x1={index * this.distX}
                            y1={this.props.data[index].total / distY * 50}
                            x2={(index+1) * this.distX}
                            y2={this.props.data[index+1].total / distY * 50}
                            style={{stroke:"rgb(255,0,0)",strokeWwidth:"2"}}
                            />  
              })
            endline =   <line 
                            x1={(this.props.data.length -1) * this.distX}
                            y1={this.props.data[this.props.data.length -1].total / distY * 50}
                            x2="0" y2={this.props.data[this.props.data.length -1].total / distY * 50}
                            stroke="black"
                            color="gray"
                            strokeDasharray="4" />
            
            endpoint = <text key="endpoint" x={500}
                            y={-1* this.props.data[this.props.data.length -1].total / distY * 50 - 5}
                            fontSize="16"
                            style={{transform: "rotateX(0)!important",stroke:"#03A9F4",fill:"#03A9F4",fontSize:"18px"}}>
                                {convertToString(this.props.data[this.props.data.length -1].total)}
                        </text>
        } else {
            datums = ""
        }
        return (
            <div className="frame">
                <svg className="chart" width="1000" height="500" style={{"transform": "rotateX(180deg)"}}>
                    <Grid maxY={this.maxY} minY={this.minY} numbers={this.length} distX={this.distX}></Grid>
                    {datums}
                    {endline}
                    {endpoint}
                </svg>
            </div>
        )
    }
}


export default Graph