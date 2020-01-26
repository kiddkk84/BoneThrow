import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Dogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dog_name: ''
        }
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
                return (dog.name.includes(this.state.dog_name) || dog._id.includes(this.state.dog_name) || dog.user.includes(this.state.dog_name) || dog.breed.includes(this.state.dog_name) || dog.date.includes(this.state.dog_name) || dog.gender.slice(0, 1).toUpperCase().includes(this.state.dog_name) || dog.age.toString().includes(this.state.dog_name) || dog.personality.includes(this.state.dog_name) || dog.medical.includes(this.state.dog_name))
            })
            .map(dog => {
                return (
                    <tr href={`/${dog._id}`}>
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

    onChange(e) {
        this.setState({
            dog_name: e.target.value
        });
        console.log(this.state)
    }


    render() {
        if (this.props.dogs.length === 0) {
            return (<div>There are no Dogs</div>)
        } else {
            return (
                <div>
                    Search by Dog Name: &nbsp;
                        <input
                        type="text"
                        value={this.state.dog_name}
                        onChange={this.onChange.bind(this)}
                    />
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
                        </tr>

                        {/* </th> */}
                        {/* </tr> */}
                        {/* </thead> */}
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                </div>

            );
        }
    }
}

export default withRouter(Dogs);