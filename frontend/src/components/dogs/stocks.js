import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Chart from 'chart.js';


class Stocks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: '',
            loader: true
        }

        this.graphRuns=this.graphRuns.bind(this);
        this.counter = 1

    }


    componentDidMount(){
        fetch('https://edwardpa.pythonanywhere.com/')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    response: myJson,
                    loader: false,
                })
                // console.log(this.state);
                // console.log(this.state.response.PETS[`alpha`])
                // console.log(this.state.response.PETS[`eleslow`])
                for(let key in this.state.response){
                    // console.log(this.state.response[key]["basecase"])
                    this.graphRuns(key)
                    
                }
                // this.graphRuns();
            });
    }

    // componentDidUpdate(){
    //     this.graphRuns();
    // }

    // componentWillReceiveProps(newState) {
    //     console.log(this.state)
    //     this.forceUpdate()
    // }

    graphRuns(ticker){
        /* chart.js chart examples 
        https://www.codeply.com/go/3l6UhaQEhq/bootstrap-4-chartjs
        */

        // chart colors
        var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

        try{
        var value = this.state.response[ticker]["basecase"];
        var json = JSON.parse("[" + value + "]");

        // console.log(json);

        /* large line chart */
        let number = json[0].length;
        // console.log(number)
        var chLine = document.getElementById(this.counter);
        this.counter+=1
        
            // var chLine = document.createElement('canvas');
            // chLine.id = 'someId';

            // document.body.appendChild(chLine); // adds the canvas to the body element

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
                    title: {
                        display: true,
                        text: ticker,
                    },
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
                yAxes: [{ display: 'false' }]
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
    catch(error){
        return (error.message)
    }

    }

    render() {
        return(
            // <div style={{ width: `45%`, margin: `0 auto`}}>
            <div>
                {this.state.loader === true ? 
                <span>LOADING FROM OUR DJANGO API MICROSERVICE 
                    https://edwardpa.pythonanywhere.com/
                </span> : 
                    <div style={{ textAlign: `-webkit-center` }}>
                        <h1> A dog's lifestyle begins with his/her owner's financial security! Look into buying a dog-related SECURITY today!</h1>
                        <h2>Y axes are daily percentage returns and X axes are approximately a year of trading days with the largest number being closest to today</h2>
                        <h3><i>Fourier analysis for seasonality like 4 waves per 250 trading days to be added !</i></h3> 
                    <canvas id="1" height="500" width="1000px"></canvas>  
                        PETS alpha: {this.state.response.PETS[`alpha`]} PETS beta: {this.state.response.PETS[`beta`]} &nbsp;
                        PetMed Express, Inc., also known as 1-800-PetMeds, is an online pet pharmacy based in the United States.
                    <canvas id="2" height="500px" width="1000px"></canvas>  
                        MRK alpha: {this.state.response.MRK[`alpha`]} MRK beta: {this.state.response.MRK[`beta`]} &nbsp;
                        Merck & Co., Inc., d.b.a. Merck Sharp & Dohme outside the United States and Canada, is an American multinational pharmaceutical company 
                    <canvas id="3" height="500px" width="1000px"></canvas>  
                        CVS alpha: {this.state.response.CVS[`alpha`]} CVS beta: {this.state.response.CVS[`beta`]} &nbsp;
                        CVS Health is an American healthcare company
                    <canvas id="4" height="500px" width="1000px"></canvas>  
                        TRUP alpha: {this.state.response.TRUP[`alpha`]} TRUP beta: {this.state.response.TRUP[`beta`]} &nbsp;
                        Trupanion is a pet insurance company!
                        <br/>
                        <br/>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                }
            </div>

            );
    }
    
}

export default withRouter(Stocks);
