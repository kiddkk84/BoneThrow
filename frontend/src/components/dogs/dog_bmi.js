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
        this.showData = this.showData.bind(this)
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
    
    youAreNew(){
            return (
                <div>
                    {localStorage.length===0 ? 
                    <h2> You have not reported any weights! Report weights anonymously here! </h2> : null}
                    {/* <h3> We like privacy so none of your dog's reported weights are ever sent to us.
                        They are stored in your browser's memory specific to the protocol of this page. 
                        (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
                    </h3> 
                    According to Zink and Van Dyke in Canine Sports and Rehabilitation, a ratio of 2.5 or higher implies that the dog should be trained on softer, forgiving, and non-slip surfaces so as to minimize the joint stress and reduce injury risk.  Dogs with a WTH of over 4 are at greater risk for injury and need a carefully structured training program.
                    (http://slimdoggy.com/calculating-a-dogs-body-mass-index/) */}
                </div>)
    }

    showData(){
        
        if (!localStorage.answer) {
            return null
        } else {
            let answer = JSON.parse(localStorage.answer);
            console.log(answer)
            return answer.map( (kvpair,index) => {
                return <div>{index} {kvpair.height} {kvpair.weight}</div>
            })
        }

    }

    render() {
        return (
            // <div style={{ width: `45%`, margin: `0 auto`}}>
            <div>
                {/* <canvas id="chLine" height="1000px" width="1500px"></canvas> */}
                <h1>DOG BMI CALCULATOR</h1>
                {/* {localStorage.setItem("weight", "15lbs")} */}


                <fieldset style={{
                    display: `block`,
                    marginLeft: `2px`,
                    marginRight: `2px`,
                    paddingTop: `0.35em`,
                    paddingBottom: `0.625em`,
                    paddingLeft: `0.75em`,
                    paddingRight: `0.75em`,
                    border:`2px groove (internal value)`}}>

                    <legend>Insert Data</legend>
                    <input id="weight" type="text" placeholder="Enter a dog weight(lbs)"></input>
                    <input id="height" type="text" placeholder="Enter a dog height(inches)"></input>
                    <button type="button" id="insert" onClick={() => {
                        let answer
                        if (!localStorage.answer) { 
                            answer = []; 
                        } else {
                            answer = JSON.parse(localStorage.answer);
                        }
                        const weight = document.getElementById("weight").value
                        const height = document.querySelector("#height").value
                        let newData = {
                            "weight": weight,
                            "height":height,
                        }
                        answer.push(newData)
                        localStorage.answer = JSON.stringify(answer);
                        console.log("The data was saved.");
                        return true;          
                        
                        // // let localstoragelength = localStorage.length + 1 || 1
                        // console.log(weight)
                        // console.log(height)
                        // // console.log(localstoragelength)
                        // // if(weight && height){
                        //     localStorage.setItem(JSON.stringify(weight), JSON.stringify(height))
                        // // }
                    }} > Calculate WTH (Weight to height ratio, a dog's BMI) </button>

                    {/* <button onClick={()=> localStorage.clear()}>Permanently delete localstorage</button>  */}
                </fieldset>

                <fieldset>
                    <legend>Stored Weights</legend>
                    <div class="output">{this.youAreNew()}
                    {/* {console.log(localStorage)} */}
                    {this.showData()}
                    
                    </div>
                
                    
                </fieldset>
            </div>

        );
    }

}

export default withRouter(DogBmi);



