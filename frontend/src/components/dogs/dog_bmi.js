import React from 'react';
import { withRouter } from 'react-router-dom';
import * as $ from 'jquery';


class DogBmi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
            storagelol: localStorage,
            error: ``,
        }
        this.showData = this.showData.bind(this)
        this.maximizevideos = this.maximizevideos.bind(this)
        this.scrollbarVisible = this.scrollbarVisible.bind(this)

    }

    componentDidMount() {
        $("#scrollbardisaster").addClass("fixed-bottom");

    }

    componentDidUpdate(prevProps, prevState){
        // if(this.state.storagelol !==  prevState.storagelol){
        //     this.forceUpdate()
        // }
    }

    componentWillReceiveProps(newState) {
    }
    
    componentWillUnmount(){
        $("#scrollbardisaster").addClass("fixed-bottom");
    }
    
    youAreNew(){
            return (
                <div>
                    {localStorage.length===0 || localStorage.answer === undefined ? 
                        <div> <i><h2> You have not reported any weights! Report your dog's weights anonymously above! </h2></i>
                        {/* <h4 style={{padding:`5px 20% 5px 20%`}}> 
                            We value your privacy so none of your *SENSITIVE* dog's reported weights are ever sent to us.
                            They are stored in your browser's memory specific to the protocol of this page. 
                            Indeed, this page will work and save your data even if you have no internet connection, and the data will persist beyond logout and/or closing the browser.
                            Localstorage technology is great for when security isn't super important but knowing that the otherwise secure
                            DB of the website owner can't sell your privacy off to advertisers is !
                            (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
                        </h4>
                            <h5 style={{ padding: `5px 10% 5px 10%`, border: `1px solid black` , margin: `5px 20% 5px 20%` }}>
                            RE doggy BMI: According to Zink and Van Dyke in Canine Sports and Rehabilitation, a ratio of 2.5 or higher implies that the dog should be trained on softer, forgiving, and non-slip surfaces so as to minimize the joint stress and reduce injury risk.  Dogs with a WTH of over 4 are at greater risk for injury and need a carefully structured training program.
                            (http://slimdoggy.com/calculating-a-dogs-body-mass-index/)
                        </h5> */}
                    </div>
                    : null}
                </div>)
    }

    showData(){
        // https://stackoverflow.com/questions/4912788/truncate-not-round-off-decimal-numbers-in-javascript
        function trunc(decimal, n = 2) {
            let x = decimal + ''; // string 
            return x.lastIndexOf('.') >= 0 ? parseFloat(x.substr(0, x.lastIndexOf('.') + (n + 1))) : decimal; // You can use indexOf() instead of lastIndexOf()
        }

        if (!localStorage.answer) {
            return null
        } else {
            let answer = JSON.parse(localStorage.answer);
            return answer.map( (kvpair,index) => {
                return <tr style={{
                    border: `2px solid black`
                }}><td style={{
                    border: `2px solid black`
                    }}>{index + 1 + "."}</td>
                    <td style={{
                        border: `2px solid black`
                    }}>{kvpair.date}</td><td style={{
                        border: `2px solid black`
                    }}>{kvpair.height + " inches"}</td> <td style={{
                        border: `2px solid black`
                    }}>{kvpair.weight + " lbs"}</td>
                    <td style={{
                        border: `2px solid black`
                    }}>{trunc(kvpair.weight/kvpair.height, 4) + " WTH ratio"}</td>
                    </tr>
            })
        }
    }

    maximizevideos(){
        var $video = $('video'),
            $window = $(window);

        $(window).resize(function () {
            var height = $window.height();
            $video.css('height', height);

            var videoWidth = $video.width(),
                windowWidth = $window.width(),
                marginLeftAdjust = (windowWidth - videoWidth) / 2;

            $video.css({
                'height': height,
                'marginLeft': marginLeftAdjust
            });
        }).resize();
    }


    scrollbarVisible(){
        //     $(function() {
        //         alert('content 1: ' + $('body').hasScrollBar());
        //     });

        // (function ($) {
        //     $.fn.hasScrollBar = function () {
        //         return this.get(0).scrollHeight > this.height();
        //     }
        // })($);
        if ((window.innerWidth - document.documentElement.clientWidth) > 0) {
            //console.log('V-scrollbar active')
            $("#scrollbardisaster").removeClass("fixed-bottom");
        }
        else {
            //console.log('V-scrollbar active')
            $("#scrollbardisaster").addClass("fixed-bottom");
        }
        clearInterval(this.CLEARTHISINTERVALPLEASE)

    }

    render() {
        return (
            <div style={{ textAlign: `-webkit-center`, backgroundColor: ``}}>
             

                <span hidden style={{}}>{this.CLEARTHISINTERVALPLEASE = setInterval( this.scrollbarVisible, 5000)}</span>

                {/* {this.scrollbarVisible()} */}
                <video poster="http://easyhtml5video.com/images/happyfit2.jpg" autoplay="autoplay" autoPlay muted loop style={{position:'fixed', left: `0`, top: `0`, width: 'auto', height:`100%`, zIndex: `-1`,overflow:`hidden`}}>
                    <source src="dogwoman.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                </video>

                <div style={{
                    color: `black`, opacity: `.74`, width: `50%`, height: `100%`, zIndex: `-1`, backgroundColor: `lightblue`, background:
                        `linear - gradient(
                            to bottom,
                            rgba(69, 74, 99, 0.6),
                            rgba(69, 74, 99, 0.8),
                            rgba(69, 74, 99, 0.6)
                        )`,
                    boxShadow: `-1px -1px 0px 0px rgba(69, 74, 99,0.3)` ,
                    backdropFilter: `blur(15px)`,
                    padding: `20px`
                }}>
                    <h1 className="">DOG BMI CALCULATOR ft. localStorage
    
                </h1>
                <fieldset style={{
                        display: `block`,
                        marginLeft: `2px`,
                        marginRight: `2px`,
                        paddingTop: `0.35em`,
                        paddingBottom: `0.625em`,
                        paddingLeft: `0.75em`,
                        paddingRight: `0.75em`,
                        border:`2px groove (internal value)`,
                    }}>

                    <legend>Insert a new weight</legend>
                    <input id="weight" type="text" placeholder="Enter weight (lbs)"></input>
                    <input id="height" type="text" placeholder="Enter height (inches)"></input>
                    <button type="button" id="insert" onClick={() => {
                        let answer
                        if (!localStorage.answer) { 
                            answer = []; 
                        } else {
                            answer = JSON.parse(localStorage.answer);
                        }
                        const weight = document.getElementById("weight").value
                        const height = document.querySelector("#height").value
                        if (isNaN(weight) === true || isNaN(height) === true || weight.length === 0 || height.length === 0){
                            this.setState({
                                error: "put in valid numbers"
                            })
                            return false
                        }

                        let newData = {
                            "weight": weight,
                            "height":height,
                            "date": new Date().toString(),
                        }
                        answer.push(newData)
                        localStorage.answer = JSON.stringify(answer);
                        // console.log("The data was saved.");
                        this.setState(
                            {
                                storagelol: localStorage,
                                error: ""
                            }
                        )
                        return true;          
                        
    
                    }} > Calculate WTH (Weight to height ratio, a dog's BMI) </button>

                </fieldset>
                    <hr></hr>
                <fieldset style={{
                    display: `block`,
                    marginLeft: `2px`,
                    marginRight: `2px`,
                    paddingTop: `0.35em`,
                    paddingBottom: `0.625em`,
                    paddingLeft: `0.75em`,
                    paddingRight: `0.75em`,
                    border: `2px groove (internal value)`
                }}>
                    <legend>Stored Weights</legend>
                    <div className="output">{this.youAreNew()}
                        {localStorage.answer === undefined ? null : 
                            <table style={{
                            border: `2px solid black`}}>
                            <tr style={{
                                border: `2px solid black`
                            }}><th> </th>
                                    <th style={{
                                        border: `2px solid black`
                                    }} >Date</th>
                                    <th style={{
                                    border: `2px solid black`}} >Height</th><th style={{
                                    border: `2px solid black`
                                }}>Weight</th><th style={{
                                    border: `2px solid black`}}>Weight-To-Height</th></tr>
                            {this.showData()}
                            </table>}
                    </div>
                    <br/><br/>
                    <button onClick={() => {localStorage.clear(); this.setState({storagelol: null}); this.scrollbarVisible(); this.setState({error: ""})}}>Delete current localstorage </button> 
                        <br></br> <span> {this.state.error}</span>
                            <br></br>    <br></br>    <br></br>    
                    
                </fieldset>
                </div>
            </div>

        );
    }

}

export default withRouter(DogBmi);



