import React from 'react';
import '../CSS/App.css';
import Form from './Form';
import List from './List';
import Graph from './Graph';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {balance: 10000, percent: 3.5, MY: "Month", period: 24}
  }

  formCalculate = (inputs) => {
    this.setState({
      balance: inputs.balance,
      percent: inputs.percent,
      MY: inputs.MY,
      period: inputs.period
    })
  }

  render(){
    return (
      <div className="App">
        <Form
          balance={this.state.balance}
          percent={this.state.percent}
          MY={this.state.MY}
          period={this.state.period}
          formCalculate={this.formCalculate}
          ></Form>
        <Graph></Graph>
        <List></List>
      </div>
    );
  }
}

export default App;
