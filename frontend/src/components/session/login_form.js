
import React from 'react';
import { withRouter } from 'react-router-dom';
// import Layout from "../layout/Layout";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/tweets');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            
            <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="text-muted">Email</label>
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                // placeholder="Email"
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

                        <button className="btn btn-primary">Submit</button>
                        {this.renderErrors()}
                    </form>
                {/* </Layout> */}
            </div>
        );
    }
}

export default withRouter(LoginForm);