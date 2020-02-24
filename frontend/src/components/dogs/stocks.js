import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Chart from 'chart.js';


class Stocks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
  
        }

        this.graphRuns=this.graphRuns.bind(this);
    }

    componentDidMount(){
        fetch('http://edwardpa.pythonanywhere.com/')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
            });
    }

    componentDidUpdate(){
        this.graphRuns();
    }

    componentWillReceiveProps(newState) {
        console.log(this.state)
        this.forceUpdate()
    }

    graphRuns(){
        /* chart.js chart examples 
        https://www.codeply.com/go/3l6UhaQEhq/bootstrap-4-chartjs
        */

        // chart colors
        var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

        /* large line chart */
        let number = [];
        var chLine = document.getElementById("chLine");
        var chartData = {
            // labels: ["S", "M", "T", "W", "T", "F", "S"],
            labels: Array.apply(null, Array(number)).map(function (_, i) { return i; }),
            datasets: [{
                // data: [589, 445, 483, 503, 689, 692, 634],
                data: this.props.dogs
                    .filter(dog => {
                        return dog._id === this.props.dogId
                    })
                    .map(dog => {
                        return dog.trips
                    })[0],
                backgroundColor: 'transparent',
                borderColor: colors[0],
                borderWidth: 4,
                pointBackgroundColor: colors[0]
            
              
            }]
        };
        if (chLine) {
            new Chart(chLine, {
                type: 'line',
                data: chartData,
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    responsive: true
                }
            });
        }

        /* 3 line charts */
        var lineOptions = {
            legend: { display: false },
            tooltips: { interest: false, bodyFontSize: 11, titleFontSize: 11 },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }
                ],
                yAxes: [{ display: false }]
            },
            layout: {
                padding: {
                    left: 6,
                    right: 6,
                    top: 4,
                    bottom: 6
                }
            }
        };


    }

    render() {
        return(
                <div>
                    asdf
                </div>

            );
    }
    
}

export default withRouter(Stocks);
