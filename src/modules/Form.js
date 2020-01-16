import React from 'react';


class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            balance: this.props.balance,
            percent: this.props.percent,
            MY: this.props.MY, 
            period: this.props.period
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    calculate = (event) => {
        event.preventDefault();
        this.props.formCalculate(this.state);
    }

    render(){
        return (
            <form className="Form_form">
                <label className="Form_label">
                    Start balance
                    <input type="number" name="balance" value={this.state.balance} onChange={this.handleInput}/>
                </label>
                <label className="Form_label">
                    Percent
                    <input type="number" name="percent" min="0" max="100" step="0.5" value={this.state.percent} onChange={this.handleInput}/>
                </label>
                <div className="Form_radio_container">
                    <label className="Form_label">
                        Monthly
                        <input type="radio" name="MY" checked={this.state.MY === "Month"} value="Month" onChange={this.handleInput}/>
                    </label>
                    <label className="Form_label">
                        Yearly
                        <input type="radio" name="MY" checked={this.state.MY === "Year"} value="Year" onChange={this.handleInput}/>
                    </label>
                </div>
                <label className="Form_label">
                    Number of Months
                    <input type="number" from="0" name="period" value={this.state.period} onChange={this.handleInput}/>
                </label>
                <input type="submit" value="Calculate" onClick={this.calculate}></input>
            </form>
        )
    }
}

export default Form