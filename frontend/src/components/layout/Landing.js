import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";


class Landing extends Component {
  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/dashboard');
  //   }
  // }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4" style={{ color: `black` }}>Bone Throw</h1>
                <p className="lead" style={{ color: `black` }}>
                  {" "}
                  Create a dog profile/portfolio! Share posts and your dog's lifestyle!
                  <img src="img/dog.jpg" style={{ height: `50%`, width: `50%` }}></img>
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2 btn-outline-primary">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
