
// import React from 'react';
// import { Link } from 'react-router-dom'
// // import './navbar.css'

// class NavBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.logoutUser = this.logoutUser.bind(this);
//         this.getLinks = this.getLinks.bind(this);
//     }

//     logoutUser(e) {
//         e.preventDefault();
//         this.props.logout();
//     }

//     // Selectively render links dependent on whether the user is logged in
//     getLinks() {
//         if (this.props.loggedIn) {
//             return (
//                 <div>
//                     <Link to={'/tweets'}>All Tweets</Link>
//                     <Link to={'/profile'}>Profile</Link>
//                     <Link to={'/new_tweet'}>Write a Tweet</Link>
//                     <button onClick={this.logoutUser}>Logout</button>
//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <Link to={'/signup'}>Signup</Link>
//                     <Link to={'/login'}>Login</Link>
//                 </div>
//             );
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>BoneThrow</h1>
//                 {this.getLinks()}
//             </div>
//         );
//     }
// }

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import { clearCurrentProfile } from "../../actions/profile_actions";
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>
                BoneThrow
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profiles">
                      {" "}
                      Profile
                    </Link>
                  </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/feed">
                      Post Feed
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/adddog">
                      Add a dog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dogs">
                      Dog Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/stocks">
                      Dog Stocks
                    </Link>
                  </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <button onClick={this.logoutUser}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>
                BoneThrow
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profiles">
                      {" "}
                      Profile
                    </Link>
                  </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }

  render() {
    return <div>{this.getLinks()}</div>;
  }
}

export default NavBar;
