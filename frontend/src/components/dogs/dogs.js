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
        // console.log(this.state)
    }

    renderList() {
   
        return this.props.dogs
            .filter(dog => {
                return (dog.name.includes(this.state.dog_name) || dog._id.includes(this.state.dog_name) || dog.user.includes(this.state.dog_name) || dog.breed.includes(this.state.dog_name) || dog.date.includes(this.state.dog_name) || dog.gender.slice(0, 1).toUpperCase().includes(this.state.dog_name) || dog.age.toString().includes(this.state.dog_name) || dog.personality.includes(this.state.dog_name) || dog.medical.includes(this.state.dog_name))
            })
            .map(dog => {
                if (this.props.me != dog.user){
                    return (
                        <tr>
                            <td> <Link to={`dog/${dog._id}`}>{dog.name}</Link></td>
                            {/* <td> {dog._id}</td>
                            <td> {dog.user} </td> */}
                            <td> {dog.ownerName} </td>
                            <td> {dog.breed} </td>
                            <td> {dog.gender.slice(0, 1).toUpperCase()} </td>
                            <td> {dog.age} </td>
                            <td> {new Date(dog.date).toLocaleDateString("en-US")} </td>
                            {/* <td> {dog.personality} </td>
                            <td> {dog.medical ? dog.medical.join(", ") : null}</td> */}
                        </tr>
                    )
                        }else{
                            let whatsGoingOn = {
                                color: 'Brown',
                                fontWeight: 'bold'
                            }
                            return ( 
                                <tr style={whatsGoingOn}>
                                    <td> <Link to={`dog/${dog._id}`}>YOUR {dog.name}</Link></td>
                                    {/* <td> {dog._id}</td>
                            <td> {dog.user} </td> */}
                                    <td> {dog.ownerName} </td>
                                    <td> {dog.breed} </td>
                                    <td> {dog.gender.slice(0, 1).toUpperCase()} </td>
                                    <td> {dog.age} </td>
                                    <td> {new Date(dog.date).toLocaleDateString("en-US")} </td>
                                    {/* <td> {dog.personality} </td>
                            <td> {dog.medical ? dog.medical.join(", ") : null}</td> */}
                                </tr>
                                )
                        }
            })
    };

    onChange(e) {
        this.setState({
            dog_name: e.target.value
        });
        // console.log(this.state)
        console.log(this.props.me)

    }


    render() {
        let parentStyle = {
            // textAlign: `center`,
            // marginLeft: `20%`,
            // marginRight: `20%`
            margin: `5vw`,
            // position: `absolute`,
            top: `50 %`,
            left: `50 %`,
            transform: `translate(-50 %, -50 %)`
        }
        let childStyle = {
            display: `flexbox`        
        }

        if (this.props.dogs.length === 0) {
            return (<div>There are no Dogs</div>)
        } else {
            return (
                <div style={parentStyle}>
                    Search for Dogs! : &nbsp; 
                        <input
                        type="text"
                        value={this.state.dog_name}
                        onChange={this.onChange.bind(this)}
                    />
                    <table className="table text-center table-hover table-bordered" style={childStyle}>
                        <thead>
                        
                        {/* <th className="text-center"> */}
                        <tr>
                            <th scope="col">Name</th>
                            {/* <th scope="col">ID</th> */}
                            <th scope="col">Owner</th>
                            <th scope="col">Breed</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            {/* <th scope="col">Personality</th> */}
                            <th scope="col">Join Date</th>
                            {/* <th scope="col">Medical</th> */}
                        </tr>

                        {/* </th> */}
                        </thead>
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