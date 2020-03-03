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
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        setTimeout(()=>{
            graphStuff(props.response.halfeleslow, "half", "2 waves/year bi-annual seasonality")
            graphStuff(props.response.quarterlyeleslow, "quarterly", '4 waves/year quarter seasonality')
            graphStuff(props.response.perfectioneleslow, "monthly", '12 waves/year monthly seasonality')
            graphStuff(props.response.weeklyeleslow, "weekly", '52 waves/year weekly seasonality')}, 1000)
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

    return (
        <div>
            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                I want to see graphs with waves!
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

                    <div>What is this?? This is using waves to guess whether a day was going to be a positive return or a negative return vs the 
                        trading day before it, using only the best 2, 4, 12, 52 waves to guess!
                        <br/>
                        <i>Yes, this is using past data to predict past data; it's a thought experiment ONLY. Do not invest based on wave patterns!</i>
                        <a href="http://www.join.robinhood.com/edwardz92" target="_blank"> &nbsp;Join robinhood (referral link)</a>
                    </div>
                    <canvas id="half" height="500px" width="1000px"></canvas>  
                    Correct guesses based off 2-wave pattern: {props.response.halfcounter} &nbsp;
                    Wrong guesses based off 2-wave pattern: {props.response.halfwrong} &nbsp;
                    Percentage correct: {props.response.halfcounter / (parseInt(props.response.halfcounter) + parseInt(props.response.halfwrong))} &nbsp;<br/>
                    <canvas id="quarterly" height="500px" width="1000px"></canvas>
                    Correct guesses based off 4-wave pattern: {props.response.quarterlycounter} &nbsp;
                    Wrong guesses based off 4-wave pattern: {props.response.quarterlywrong} &nbsp;
                    Percentage correct: {props.response.quarterlycounter / (parseInt(props.response.quarterlycounter) + parseInt(props.response.quarterlywrong))} &nbsp;<br />  
                    <canvas id="monthly" height="500px" width="1000px"></canvas> 
                    Correct guesses based off 12-wave pattern: {props.response.perfectioncounter} &nbsp;
                    Wrong guesses based off 12-wave pattern: {props.response.perfectionwrong} &nbsp;
                    Percentage correct: {props.response.perfectioncounter / (parseInt(props.response.perfectioncounter) + parseInt(props.response.perfectionwrong))} &nbsp;<br /> 
                    <canvas id="weekly" height="500px" width="1000px"></canvas>
                    Correct guesses based off 52-wave pattern: {props.response.weeklycounter} &nbsp;
                    Wrong guesses based off 52-wave pattern: {props.response.weeklywrong} &nbsp;
                    Percentage correct: {props.response.weeklycounter / (parseInt(props.response.weeklycounter) + parseInt(props.response.weeklywrong))} &nbsp;  

                    <br/>
                   
                    <br/>
                    <br/>
                </Typography>
            </Popover>
        </div>
    );
}