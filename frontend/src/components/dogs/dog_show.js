import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class DogShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dog_name: '',
            trip: 5,

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
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
                        <td> {dog._id}</td>
                        <td> {dog.user} </td>
                        <td> {dog.breed} </td>
                        <td> {dog.date} </td>
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
        // this.setState({ 
        //     breed: '',
        //     medical: '',
        //     age: '',
        //     gender: '',
        //     personality: '',
        //     name: '',
        // })
    }

    render() {
        if (this.props.dogs.length === 0) {
            return (<div>There are no Dogs</div>)
        } else {
            return (
                <div>
                    <table className="table table-striped">
                        {/* <thead> */}
                        {/* <tr> */}
                        {/* <th className="text-center"> */}
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
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.trip} onChange={this.update('trip').bind(this)}></input>
                        <input type="submit" value="CICKME"/>
                    </form>
        
                </div>

            );
        }
    }
}

export default withRouter(DogShow);