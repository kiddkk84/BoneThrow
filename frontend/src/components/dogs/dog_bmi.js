import React from 'react';
import { withRouter } from 'react-router-dom';

class DogBmi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
            storagelol: localStorage,
            error: ``,
        }
        this.showData = this.showData.bind(this)
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState){
        // if(this.state.storagelol !==  prevState.storagelol){
        //     this.forceUpdate()
        // }
    }

    componentWillReceiveProps(newState) {
    }
    
    youAreNew(){
            return (
                <div>
                    {localStorage.length===0 || localStorage.answer === undefined ? 
                   <div> <h2> You have not reported any weights! Report your dog's weights anonymously above! </h2>
                        <h4 style={{padding:`5px 20% 5px 20%`}}> 
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
                        </h5>
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

    render() {
        return (
            <div style={{ textAlign: `-webkit-center`}}>
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
                    <div class="output">{this.youAreNew()}
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
                    {this.state.error}
                    <button onClick={() => {localStorage.clear(); this.setState({storagelol: null}) }}>Delete current localstorage </button> 

                    
                </fieldset>
            </div>

        );
    }

}

export default withRouter(DogBmi);



