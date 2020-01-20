import React from 'react';


class Graph extends React.Component {
    constructor(props){
        super(props);
    }

        render(){
        if (this.props.data !== undefined){
            var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
            return (
                
                <div className="Graph_container">
                    <canvas id="myChart" />
                </div>
            )
        }
        return "Loading..."
    }
}

export default Graph
