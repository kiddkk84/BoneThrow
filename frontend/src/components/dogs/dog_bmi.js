import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Chart from 'chart.js';

// http://slimdoggy.com/calculating-a-dogs-body-mass-index/
// caclulate your dog's personality mapped to sentiment analysis or something
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

class DogBmi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: ''
        }
        let myStorage = window.localStorage;
        localStorage.setItem('myCat', 'Tom');
        var cat = localStorage.getItem('myCat');
        localStorage.removeItem('myCat');
        localStorage.clear();

        this.graphRuns = this.graphRuns.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate(){
    }

    componentWillReceiveProps(newState) {
       
    }

    graphRuns() {
        /* chart.js chart examples 
        https://www.codeply.com/go/3l6UhaQEhq/bootstrap-4-chartjs
        */

        // chart colors
        var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];


        var value = this.state.response.PETS[`eleslow`];
        var json = JSON.parse("[" + value + "]");

        console.log(json);

        /* large line chart */
        let number = json[0].length;
        console.log(number)
        var chLine = document.getElementById("chLine");
        var chartData = {
            // labels: ["S", "M", "T", "W", "T", "F", "S"],
            labels: Array.apply(null, Array(number)).map(function (_, i) { return i; }),
            datasets: [{
                // data: [589, 445, 483, 503, 689, 692, 634],
                // data: this.state.response.PETS[`eleslow`],
                data: json[0],
                backgroundColor: 'transparent',
                // borderColor: colors[0],
                borderColor: 'transparent',
                borderWidth: 0,
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
                        display: true
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
                yAxes: [{ display: 'true' }]
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
        return (
            // <div style={{ width: `45%`, margin: `0 auto`}}>
            <div>
                {/* <canvas id="chLine" height="1000px" width="1500px"></canvas> */}
                DOG BMI CALUCLATOR
            </div>

        );
    }

}

export default withRouter(DogBmi);



