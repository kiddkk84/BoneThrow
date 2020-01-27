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
            medical: [],
            age: '',
            gender: '',
            personality: '',
            name: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.updateDropdown = this.updateDropdown.bind(this);
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
        return e => {
        
        this.setState({
            [field]: e.currentTarget.value
        });
        console.log(this.state)
        }
    }



    updateDropdown(value){
        console.log(value)
        this.setState({
            breed: value
        })
    }

    updateCheckbox(field) {
        return e => {

            if(!this.state.medical.includes(e.currentTarget.value)){
                this.setState({
                    medical: this.state.medical.concat([e.currentTarget.value])
               });
            } else {
                let newMedical = this.state.medical.splice(this.state.medical.indexOf(e.currentTarget.value), 1);
                this.setState({
                    medical: newMedical
                });
            }
            console.log(this.state)
        }
    }
        
    render() { 
        let stylez = {
            margin: `0`,
            marginLeft: `30%`,
            background: `yellow`,
            // position: `absolute`,
            top: `50%`,
            left: `50%`,
            // marginRight: `-50%`,
            // transform: `translate(-50%, -50%)`,
        }

        let halfscreen = {
            width: `50%`
        }

        return (
            <div style={stylez}>
                {/* <Layout> */}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                placeholder="Dog's name..."
                            />
                        </div>

                        <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male" onChange={this.update('gender')}  />
                                    Male 
                                </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <label className="form-check-label" >
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female" onChange={this.update('gender')}/>
                                    Female
                                </label>
                        </div>  

                        <input type="text"
                            value={this.state.age}
                            onChange={this.update('age')}
                            placeholder="age..."
                        />

                        
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {this.state.breed === '' ? "Select your breed"
                                : this.state.breed} 
                            </Dropdown.Toggle>


                            <Dropdown.Menu>
                                {["Labrador Retriever", "German Shepherd", "Golden Retriever", "Bulldog", "Beagle", "Poodle", "Rottweiler", "Pointer", "Yorkshire Terrier", "Boxer"].map(
                                    breedType => {
                                    return <Dropdown.Item key={breedType} onSelect={this.updateDropdown} eventKey={breedType}>{breedType}</Dropdown.Item>
                                        }
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <br/>
                            
                            
                        <textarea 
                                value={this.state.personality}
                                onChange={this.update('personality')}
                                placeholder="personality..."
                                className="form-control" id="exampleFormControlTextarea1" rows="1">
                                style={halfscreen}
                        </textarea>


                        {["Arthritis", "Allergies", "Diabetes", "IBD", "Obesity"].map( (disease, index ) => {
                            return ( 
                                <div key={`${disease}-${index}`} className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id={`inlineCheckbox${index}`} value={disease} onChange={this.updateCheckbox('medical')}/>
                                    <label className="form-check-label" >{disease}</label>
                                </div>
                            )
                            }
                        )}
                                <br/>
                                <br/>
                        <input type="submit" className="btn btn-xxlarge btn-success" value="Add your dog" />
                        
                            {/* 
                        {window.error ? 
                            `${window.error}` :
                            null
                        } */}

                        {this.props.newDog !== undefined && this.props.newDog.trips!== undefined && this.props.newDog.trips.length === 0 ? 
                            <div>
                                Doggy {this.props.newDog.name} ADDED SUCCESFULLY!
                                <pre>
                                Feel free to keep adding more!
                                </pre>
                            </div>

                       : null}
                          
            
                    </div>
                </form>
                <br />
                {/* </Layout> */}
            </div>
        )
    }
}

export default DogForm;

