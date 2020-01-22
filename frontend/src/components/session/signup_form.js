
import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from "../nav/Layout";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            errors: {},
            age: '',
            address: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2,
            age: this.state.age,
            address: this.state.address
        };

        this.props.signup(user, this.props.history);
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {Object.keys(this.state.errors).map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {this.state.errors[error]}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div>
                <Layout title="Signup"
                    description="Signup to Bone Throw"
                    className="container col-md-8 offset-md-2">
                
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="text-muted">Handle</label>
                            <input type="text"
                                value={this.state.handle}
                                onChange={this.update('handle')}
                                // placeholder="Handle"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-muted">Email</label>
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                // placeholder="email"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-muted">Password</label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                // placeholder="Password"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-muted">Confirm Password</label> 
                            <input type="password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                                // placeholder="Confirm Password"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-muted">Age</label>
                            <input type="text"
                                value={this.state.age}
                                onChange={this.update('age')}
                                // placeholder="email"
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-muted">Address</label>
                            <input type="text"
                                value={this.state.address}
                                onChange={this.update('address')}
                                // placeholder="email"
                                className="form-control"
                            />
                        </div>

                        <button className="btn btn-primary">Submit</button>
                        {/* {this.renderErrors()} */}
                  
                    </form>
                </Layout>
            </div>
        );
    }
}

export default withRouter(SignupForm);