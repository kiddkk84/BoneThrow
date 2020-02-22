import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DogMapContainer from '../map/map_container'
import Chart from 'chart.js';


class DogShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dog_name: '',
            trip: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTrips = this.renderTrips.bind(this)
        this.renderRecommendation.bind(this)
        this.graphRuns=this.graphRuns.bind(this);
    }

    componentDidMount() {
        this.props.fetchDogs();
        // this.graphRuns();
    }

    componentDidUpdate(){
        this.graphRuns();
        console.log(this.props.dogs
            .filter(dog => {
                return dog._id === this.props.dogId
            })
            .map(dog => {
                return dog.trips
            }))
    }

    componentWillReceiveProps(newState) {
        this.setState({ dogs: newState.dogs });
        console.log(this.state)
        this.forceUpdate()
    }

    renderList() {
        return this.props.dogs
            .filter(dog => {
                return dog._id === this.props.dogId
                
            })
            .map(dog => {
                return (
                    <tr>
                        <td> {dog.name}</td>
                        {/* <td> {dog._id}</td> */}
                        {/* <td> {dog.user} </td> */}
                        <td> {dog.ownerName} </td>
                        <td> {dog.breed} </td>
                        <td> {new Date(dog.date).toLocaleDateString("en-US")} </td>
                        <td> {dog.gender.slice(0, 1).toUpperCase()} </td>
                        <td> {dog.age} </td>
                        <td> {dog.personality} </td>
                        <td> {dog.medical ? dog.medical.join(", ") : null}</td>
                    </tr>
                )
            })
    };

    update(field) {
        return e => {

            this.setState({
                [field]: e.currentTarget.value
            });
            console.log(this.state)
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let dog = {
            trips: this.state.trip
            // breed: this.state.breed,
            // medical: this.state.medical,
            // age: this.state.age,
            // gender: this.state.gender,
            // personality: this.state.personality,
            // name: this.state.name
        };

        this.props.changeDog(this.props.dogId, dog);
        setTimeout(()=>{
            this.props.fetchDogs()
            this.forceUpdate()
            this.props.history.go(0)
        } , 1000)

        // this.setState({ 
        //     breed: '',
        //     medical: '',
        //     age: '',
        //     gender: '',
        //     personality: '',
        //     name: '',
        // })

    }

    renderTrips(){
        return(<span>
            {this.props.dogs
                .filter(dog => {
                    return dog._id === this.props.dogId
                })
                .map(dog => { 
                    return dog.trips.join(", ") })}

        </span>)
    }

    renderRecommendation(){ 
        return ( <span>
            {this.props.dogs
                .filter(dog => {
                    return dog._id === this.props.dogId
                })
                .map(dog => {
                    let average = 0
                    dog.calculatedHealth.forEach(score => {
                        average += score
                    })
                    return Math.floor(5 + average / dog.calculatedHealth.length * .9 - dog.medical.length * .1 + .1 * dog.breed.length - dog.age * .5)
                })}
        </span>
        )
    }

    renderErrors(){
            if(this.props.newDog !== undefined){
                return (this.props.newDog.errors) 
            }else{
                return (null)
            }
    }

    renderDogFoodRecommendations(){
        return (
            <div>
            <p> We recommend you look into this dog food!</p>
            <iframe src="https://www.dogfoodadvisor.com/best-dog-foods/best-dry-dog-foods/" width="540" height="450"></iframe>
           
        {/* <iframe src="https://www.pedigree.com/dog-foods/details/pedigree-active-senior-roasted-chicken-rice-vegetable-flavor" width="540" height="450"></iframe> */}
            </div>
        )

    }

    shouldComponentUpdate(){
        return true;
    }

    graphRuns(){
        /* chart.js chart examples 
        https://www.codeply.com/go/3l6UhaQEhq/bootstrap-4-chartjs
        */

        // chart colors
        var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

        /* large line chart */
        let number = this.props.dogs
            .filter(dog => {
                return dog._id === this.props.dogId
            })
            .map(dog => {
                return dog.trips
            })[0].length;
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
        if (this.props.dogs.length === 0) {
            return (<div>There are no Dogs</div>)
        } else {
            return (
                <div>
                    A dog's show page!
                    <table className="table table-striped">
                        {/* <thead> */}
                        {/* <tr> */}
                        {/* <th className="text-center"> */}
                        <tbody>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Owner's Email</th>
                            <th scope="col">Breed</th>
                            <th scope="col">Date Joined</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Personality</th>
                            <th scope="col">Medical Conditions</th>
                            {/* {this.props.dogId} */}
                            
                        </tr>

                        {/* </th> */}
                        {/* </tr> */}
                        {/* </thead> */}
                            {this.renderList()}
                        </tbody>
                    </table>
              

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.trip} onChange={this.update('trip').bind(this)}></input>
                        <input type="submit" value="Add new dog-walk trip's distance"/>
                    </form>
                    BONETHROW PROPRIETARY BIZ ALGORITHM:
                    Your trips thus far have been: {this.renderTrips()} miles <br/>
                    <div>
                        <canvas id="chLine"
                            height="50px"></canvas>
                    </div>

                    Based on your previous trips and your dog's health, we recommend you walk this dog: {this.renderRecommendation()} miles
                    <p>Check out this randomly generated path of {this.renderRecommendation()} miles distance from your address! 
                    (assuming the path is straight and you are close to san francisco's latitude/longitude</p>
                    

                


                    
                    
                    <div style={{display: `flex`}}>
                        <DogMapContainer recommendation={this.renderRecommendation()} trip={this.state.trip}/>
                        {this.renderErrors()}
                        {this.renderDogFoodRecommendations()}
                    </div>
                    <br/>
                    <br />

                    <br />

                    <br />


                </div>

            );
        }
    }
}

export default withRouter(DogShow);