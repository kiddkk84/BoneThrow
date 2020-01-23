import React from 'react';
import { withRouter } from 'react-router-dom';

class Dogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dogs: []
        }
    }

    componentWillMount() {
        this.props.fetchDogs();
    }

    componentWillReceiveProps(newState) {
        this.setState({ dogs: newState.dogs });
    }

    render() {
        if (this.state.dogs.length === 0) {
            return (<div>There are no Dogs</div>)
        } else {
            return (
                <div>
                    <h2>All Dogs</h2>
                    {this.state.dogs.map(dog => (
                        // {dog._id} 
                        dog.breed 
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Dogs);