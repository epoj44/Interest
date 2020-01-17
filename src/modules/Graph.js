import React from 'react';

class Graph extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        //GRID
        if (this.props.data !== undefined){
        const grid = [];
        for(let i = 0; i < this.props.data.length; i++){
            grid.push(<line key={`H${i}`} x1={1200 / this.props.data.length * i} y1={0} x2={1200 / this.props.data.length * i} y2="100%" style={{stroke:"rgb(122,122,122)",strokeWidth:0.5}} />) 
        }
        for(let i = 0; i < 14; i++){
            grid.push(<line key={`V${i}`} x1={0} y1={720 / 14 * i} x2="100%" y2={720 / 14 * i} style={{stroke:"rgb(122,122,122)",strokeWidth:0.5}} />)

        }

        //POLYGLON
        let points = ""
        this.props.data.map((row, index) => {
            points += 1200 / this.props.data.length * index + " " + row.total / 720 + ","
            if (index +1 == this.props.data.length){
                points += 1200 / this.props.data.length * index + " " + row.total / 720  
            }
        })
        const polyline = <polyline points={points}
        style={{fill:"none",stroke:"blue",strokeWidth:3}} />
        
        return (
            <div className="Graph_container">
                <svg className="Graph_svg" width="100%" height="100%" viewBox="0 0 1200 720" style={{transform: "rotateZ(180deg)rotateY(180deg)"}}>
                    {/* {y-asix} */}
                    {/* {x-axis} */}
                    {grid}
                    {polyline}
                </svg>
            </div>
        )
        }
        return "Loading..."
    }
}

export default Graph
