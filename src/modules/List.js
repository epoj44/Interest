import React from 'react';
import Number from './Number';

class List extends React.Component {

    render(){
        const list = this.props.data !== undefined ? this.props.data.map((row) => {
            let total = new Number(row.total);
            let previous = new Number(row.previous);
            return (
                <div className="List_row" key={row.number}>
                    <span>{row.number}</span>
                    <span>$ {previous.convertToString()}</span>
                    <span>{row.percent > 0 ? "+" : ""}{row.percent}%</span>
                    <span>$ {total.convertToString()}</span>
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