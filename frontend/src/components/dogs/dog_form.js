import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


class DogForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            breed: '',
            medical: '',
            age: '',
            gender: '',
            personality: '',
            name: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({ newDog: nextProps.newDog.text });
    }

    handleSubmit(e) {
        e.preventDefault();
        let dog = {
            breed: this.state.breed,
            medical: this.state.medical,
            age: this.state.age,
            gender: this.state.gender,
            personality: this.state.personality,
            name: this.state.name
        };

        this.props.composeDog(dog);
        this.setState({ 
            breed: '',
            medical: '',
            age: '',
            gender: '',
            personality: '',
            name: '',
        })
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
  </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <input type="textarea"
                            value={this.state.breed}
                            onChange={this.update()}
                            placeholder="Breed..."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
            </div>
        )
    }
}

export default DogForm;