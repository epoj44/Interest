import React from 'react';
import '../CSS/App.css';
import Form from './Form';
import List from './List';
import Graph from './Graph';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {balance: 10000, percent: 3.5, MY: "Month", period: 24, data: undefined}
  }

  formCalculate = (inputs) => {
    this.setState({
      balance: inputs.balance,
      percent: inputs.percent,
      MY: inputs.MY,
      period: inputs.period,
      data: undefined
    }, () => this.updateData())
  }

  updateData(){
    const data = [];
    data.push({
      number: 1,
      previous: this.state.balance,
      percent: this.state.percent,
      total: Math.round(this.state.balance * (this.state.percent / 100 + 1) * 100) / 100
    })
    
    for(let i = 1; i < this.state.period; i++){
      data.push({
        number: i+1,
        previous: data[i-1].total,
        percent: this.state.percent,
        total: Math.round(data[i-1].total * (this.state.percent / 100 + 1) * 100) / 100
      })
    }
    this.setState({
      data: data
    })
  }

  componentDidUpdate() {

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
          >
        </Form>
        <Graph
          data={this.state.data}
          >
        </Graph>
        <List 
          data={this.state.data}
          >
        </List>
      </div>
    );
  }
}

export default App;
