import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Chart from 'chart.js';

//https://material-ui.com/api/popover/
const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

export default function SimplePopover(props) {
    let counter = 0
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        setTimeout( ()=>{
            graphStuff(props.response.halfeleslow, "half", "2 waves/year bi-annual seasonality")
            graphStuff(props.response.quarterlyeleslow, "quarterly", '4 waves/year quarter seasonality')
            graphStuff(props.response.perfectioneleslow, "monthly", '12 waves/year monthly seasonality')
            graphStuff(props.response.weeklyeleslow, "weekly", '52 waves/year weekly seasonality')
             graphRuns(props.response.halfcorrelation)
             graphRuns(props.response.quarterlycorrelation)
             graphRuns(props.response.perfectioncorrelation)
             graphRuns(props.response.weeklycorrelation)
        }, 1000)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



// wave types: perfection is 12 waves/year misnamed it it hsouldve been monthly
// half is 2 waves/year
// quarterly is 4 waves/year
// weekly is 52 waves/year
    function graphStuff(propsdata,chartid,labelname){
        var ctx = document.getElementById(chartid);
       
        if(ctx){
        let answer = []
            let json = JSON.parse("[" + propsdata + "]")[0];
        for(let i = 0; i < json.length; i++ ){
            answer.push({ x: i, y: json[i]})
        }

        let basecase = []
        let basecasejson = JSON.parse("[" + props.response.basecase + "]")[0]
        for(let i=0; i< basecasejson.length; i++){
            basecase.push({x:i, y:basecasejson[i]})
        }

        var myChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: labelname,
                        data: answer,
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(0, 200, 0, 1)'
                    },
                    {
                        label: 'percentage daily return',
                        data: basecase,
                        showLine: true,
                        fill: false,
                        borderColor: 'rgba(200, 0, 0, 1)'
                    }
                ]
            },
            options: {
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
            }
        });

        }
    }

    function graphRuns(propToGraph){
        /* chart.js chart examples 
        https://www.codeply.com/go/3l6UhaQEhq/bootstrap-4-chartjs
        */

        // chart colors
        var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

        try {
            let value = propToGraph;
            let json = JSON.parse("[" + value + "]");

            // console.log(json);

            /* large line chart */
            let number = json[0].length;
            // console.log(number)
            let chLine = document.getElementById("correlation"+JSON.stringify(counter));
            counter += 1
            console.log(chLine)
            console.log(json[0])

            // var chLine = document.createElement('canvas');
            // chLine.id = 'someId';

            // document.body.appendChild(chLine); // adds the canvas to the body element

            let chartData = {
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
                            // display: true,
                            // text: ticker,
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

            // /* 3 line charts */
            // var lineOptions = {
            //     legend: { display: false },
            //     tooltips: { interest: false, bodyFontSize: 11, titleFontSize: 11 },
            //     scales: {
            //         xAxes: [
            //             {
            //                 ticks: {
            //                     display: false
            //                 },
            //                 gridLines: {
            //                     display: false,
            //                     drawBorder: false
            //                 }
            //             }
            //         ],
            //         yAxes: [{ display: 'false' }]
            //     },
            //     layout: {
            //         padding: {
            //             left: 6,
            //             right: 6,
            //             top: 4,
            //             bottom: 6
            //         }
            //     }
            // };
        }
        catch (error) {
            console.log(error.message)
            return (error.message)
        }

    }
   

    return (
        <div>
            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                More details on {props.name} 
      </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>

                    <div>
                    <h1> {props.name}</h1>
                        What is this?? This is using waves to guess whether a day was going to be a positive return or a negative return vs the 
                        trading day before it, using only the best 2, 4, 12, 52 waves to guess!
                        <br/>
                        <i>Yes, this is using past data to predict past data; it's a thought experiment ONLY. Do not invest based on wave patterns!</i>
                       &nbsp; <a href="https://join.robinhood.com/edwardz92" target="_blank"> Join robinhood (referral link)</a>
                    </div>
                    <canvas id="half" height="500px" width="1000px"></canvas>  
                    Correct guesses based off 2-wave pattern: {props.response.halfcounter} &nbsp;
                    Wrong guesses based off 2-wave pattern: {props.response.halfwrong} &nbsp;
                    Percentage correct: {props.response.halfcounter / (parseInt(props.response.halfcounter) + parseInt(props.response.halfwrong))} &nbsp;<br/>
                    <div>Correlation Below, the peak should be in the middle, ideally as a singular point!</div>

                    <canvas id="correlation0" height="500px" width="1000px"></canvas>  

                    <canvas id="quarterly" height="500px" width="1000px"></canvas>
                    Correct guesses based off 4-wave pattern: {props.response.quarterlycounter} &nbsp;
                    Wrong guesses based off 4-wave pattern: {props.response.quarterlywrong} &nbsp;
                    Percentage correct: {props.response.quarterlycounter / (parseInt(props.response.quarterlycounter) + parseInt(props.response.quarterlywrong))} &nbsp;<br />  
                    <div>Correlation Below, the peak should be in the middle, ideally as a singular point!</div>

                    <canvas id="correlation1" height="500px" width="1000px"></canvas>  

                    <canvas id="monthly" height="500px" width="1000px"></canvas> 
                    Correct guesses based off 12-wave pattern: {props.response.perfectioncounter} &nbsp;
                    Wrong guesses based off 12-wave pattern: {props.response.perfectionwrong} &nbsp;
                    Percentage correct: {props.response.perfectioncounter / (parseInt(props.response.perfectioncounter) + parseInt(props.response.perfectionwrong))} &nbsp;<br /> 
                    <div>Correlation Below, the peak should be in the middle, ideally as a singular point!</div>
                    <canvas id="correlation2" height="500px" width="1000px"></canvas>  

                    <canvas id="weekly" height="500px" width="1000px"></canvas>
                    Correct guesses based off 52-wave pattern: {props.response.weeklycounter} &nbsp;
                    Wrong guesses based off 52-wave pattern: {props.response.weeklywrong} &nbsp;
                    Percentage correct: {props.response.weeklycounter / (parseInt(props.response.weeklycounter) + parseInt(props.response.weeklywrong))} &nbsp;  
                                        <div>Correlation Below, the peak should be in the middle, ideally as a singular point!</div>

                     <canvas id="correlation3" height="500px" width="1000px"></canvas>  


                    <br/>
                   
                    <br/>
                    <br/>
                </Typography>
            </Popover>
        </div>
    );
}