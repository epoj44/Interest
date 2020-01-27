import React from 'react';
import {convertToString} from './Number'


class List extends React.Component {

    render(){
        const list = this.props.data !== undefined ? this.props.data.map((row) => {
            return (
                <div className="List_row" key={row.number}>
                    <span>{row.number}</span>
                    <span>$ {convertToString(row.previous)}</span>
                    <span>{row.percent > 0 ? "+" : ""}{row.percent}%</span>
                    <span>$ {convertToString(row.total)}</span>
                </div>
            )
        }) : ""
        return (
            <div className="List_container">
                <div className="List_head">
                    <span>{this.props.MY}</span>
                    <span>Previous</span>
                    <span>Percent</span>
                    <span>Total</span>
                </div>
                {list}
            </div>
        )
    }
}

export default List