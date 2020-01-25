import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
// import Layout from "../layout/Layout";

import FilteredList from './breed_list_filter';

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
        this.update = this.update.bind(this)
        this.updateDropdown = this.updateDropdown.bind(this)

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
        // this.setState({ 
        //     breed: '',
        //     medical: '',
        //     age: '',
        //     gender: '',
        //     personality: '',
        //     name: '',
        // })
    }

  
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    updateDropdown(value){
        console.log(value)
        this.setState({
            breed: value
        })
    }

        
    render() {
        return (
            <div>
                {/* <Layout> */}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select your dog's breed
                            </Dropdown.Toggle>


                            <Dropdown.Menu>
                                <Dropdown.Item onSelect={this.updateDropdown} eventKey={'Lab'}>Lab</Dropdown.Item>
                                <Dropdown.Item onSelect={this.updateDropdown} eventKey={'German shepherd'}>German shepherd</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <br/>
                        <input type="text"
                            value={this.state.personality}
                            onChange={this.update('personality')}
                            placeholder="personality..."
                        />
                        <input type="text"
                            value={this.state.medical}
                            onChange={this.update('medical')}
                            placeholder="medical..."
                        />
                        <input type="text"
                            value={this.state.age}
                            onChange={this.update('age')}
                            placeholder="age..."
                        />
                        <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            placeholder="Dog's name..."
                        />
                        <input type="text"
                            value={this.state.gender}
                            onChange={this.update('gender')}
                            placeholder="dog gender..."
                        />
                        <input type="submit" value="Submit" />

                        <Form>
                            {['checkbox', 'radio'].map(type => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`default ${type}`}
                                    />

                                    <Form.Check
                                        disabled
                                        type={type}
                                        label={`disabled ${type}`}
                                        id={`disabled-default-${type}`}
                                    />
                                </div>
                            ))}
                        </Form>

                        {/* <FilteredList /> */}
                    </div>
                </form>
                <br />
                {/* </Layout> */}
            </div>
        )
    }
}

export default DogForm;

