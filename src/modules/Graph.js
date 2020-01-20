import React from 'react';

class Graph extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        if (this.props.data !== undefined) {

        }
    }

    render(){
        if (this.props.data !== undefined){
        const minY = this.props.data[0].total;
        const maxY = this.props.data[this.props.data.length -1].total;
        const distanceY = ((((maxY - minY) / 504)));
        console.log("min:" + minY + ", max: " + maxY + ", distance:" + distanceY)
        

        //GRID
        const grid = [];
        const y_asix = [];
        const x_asix = [];
        for(let i = 0; i < this.props.data.length; i++){
            if (this.props.data.length >= 30 ? (i % 5 == 0) : true) {
                grid.push(<line key={`H${i}`} x1={1200 / this.props.data.length * i} y1={0} x2={1200 / this.props.data.length * i} y2="100%" style={{stroke:"rgb(122,122,122)",strokeWidth:0.5}} />) 
            }
        }
        for(let i = 0; i < 14; i++){
            grid.push(<line key={`V${i}`} x1={0} y1={720 / 14 * i} x2="100%" y2={720 / 14 * i} style={{stroke:"rgb(122,122,122)",strokeWidth:0.5}} />)
            y_asix.push(<text key={`VT${i}`} x={0} y={(-720 / 14 * i)} fill="black">{((((maxY - minY) / 504) * i * 51)) + minY}</text>)
        }

        //POLYGLON
        let points = ""
        this.props.data.map((row, index) => {
            let posX = 1200 / this.props.data.length * index
            let posY = ((((row.total - minY) / maxY) * 504))
            points += posX + " " + posY + ",";
            if (index +1 == this.props.data.length){
                points += posX + " " + posY 
            }

        })
        const polyline = <polyline points={points}
        style={{fill:"none",stroke:"blue",strokeWidth:3}} />
        
        return (
            <div className="Graph_container">
                <svg className="Graph_svg" width="100%" height="100%" viewBox="0 0 1200 720" style={{transform: "rotateZ(180deg)rotateY(180deg)"}}>
                    {y_asix}
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
