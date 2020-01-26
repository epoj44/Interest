import React from 'react';
import Number from './Number'


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
        this.handleBalance = this.handleBalance.bind(this);
    }

    handleInput = (event) => {
        const target = event.target;
        let value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    submit = (event) => {
        this.handleBalance()

        if (event !== undefined){
            event.preventDefault();
        }
        let data = this.state;
        
        data.balance = new Number(data.balance);
        data.balance = data.balance.convertToNum();
        
        if (data.period <= 2){
            data.period = 2
        }
        if (data.period > 150){
            data.period = 150
        }
        this.props.formCalculate(data);
    }

    componentDidMount(){
        this.submit()
    }


    handleBalance(){
        let value = new Number(document.getElementsByName("balance")[0].value);
        value = value.convertToString()
                this.setState({
                    balance: value
                })



    }

    render(){
        return (
            <form className="Form_form" onSubmit={this.submit}>
                <label className="Form_label">
                    Start balance
                    <input type="text" name="balance" value={this.state.balance} onChange={this.handleInput} onBlur={this.handleBalance}/>
                </label>
                <label className="Form_label">
                    Percent
                    <input type="number" name="percent" min="0" step="0.5" value={this.state.percent} onChange={this.handleInput}/>
                </label>
                <div className="Form_radio_container">
                    <label className="Form_label">
                        <input type="radio" name="MY" checked={this.state.MY === "Month"} value="Month" onChange={this.handleInput}/>
                        Monthly
                    </label>
                    <label className="Form_label">
                        <input type="radio" name="MY" checked={this.state.MY === "Year"} value="Year" onChange={this.handleInput}/>
                        Yearly
                    </label>
                </div>
                <label className="Form_label">
                    Number of {(this.state.MY === "Month")?"Months":"Years"}
                    <input type="number" min="2" name="period" value={this.state.period} onChange={this.handleInput}/>
                </label>
                <input type="submit" value="Calculate" onClick={this.submit}></input>
            </form>
        )
    }
}

export default Form