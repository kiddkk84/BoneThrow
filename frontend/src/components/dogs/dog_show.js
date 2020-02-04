import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DogMapContainer from '../map/map_container'

class DogShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dog_name: '',
            trip: '',

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTrips = this.renderTrips.bind(this)
    }

    componentDidMount() {
        this.props.fetchDogs();
    }

    componentWillReceiveProps(newState) {
        this.setState({ dogs: newState.dogs });
        console.log(this.state)
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
        setTimeout(this.props.fetchDogs, 1000)

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
                            <th scope="col">ID</th>
                            <th scope="col">Owner's ID</th>
                            <th scope="col">Breed</th>
                            <th scope="col">Date</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Personality</th>
                            <th scope="col">Medical</th>
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
                    Your trips thus far have been: {this.renderTrips()} miles <br/>
                    We recommend you walk this dog: {this.renderRecommendation()} miles
                    <DogMapContainer recommendation={this.renderRecommendation()}/>
                    {this.renderErrors()}
                </div>

            );
        }
    }
}

export default withRouter(DogShow);