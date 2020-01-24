import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from "../nav/Layout";

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

    renderList(){
        console.log(this.props.dogs.filter(dog => 
            dog.name.includes(this.state.dog_name)))

            return this.props.dogs.filter(dog =>
            dog.name.includes(this.state.dog_name)).map(dog => {
            return <tr><td> {dog.name}</td> <td> {dog._id}</td></tr>
            })

    }

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
                <Layout>
                    <div>
                        <input
                            type="text"
                            value={this.state.dog_name}
                            onChange={this.onChange.bind(this)}
                        />
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="text-center">
                                Index of all dogs
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                    </div>
                </Layout>

            );
        }
    }
}

export default withRouter(Dogs);