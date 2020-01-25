import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';
<<<<<<< HEAD
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
=======
import NavBarContainer from './layout/navbar_container';



>>>>>>> a0764c06bf0a99c063581f5ffbd7407d2eae7eea
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import Menu from "./nav/Menu";
import DogMap from './map/dog_map'

import DogFormContainer from './dogs/dog_form_container';
import DogsContainer from './dogs/dogs_container';
import Dashboard from './dashboard/dashboard';
import Footer from '../components/layout/Footer';
import Landing from "../components/layout/Landing";
import PrivateRoute from "../components/common/PrivateRoute";
import CreateProfile from "../components/create-profile/CreateProfile";
import Posts from "../components/posts/Posts";


const App = () => (
    <div>
        <NavBarContainer />
        {/* <Menu /> */}
        <Switch>
<<<<<<< HEAD
            <Route exact path="/" component={MainPage} />
            <Route exact path="/map" component={DogMap} />
=======
            <Route exact path="/" component={Landing} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/feed" component={Posts} />
>>>>>>> a0764c06bf0a99c063581f5ffbd7407d2eae7eea
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/register" component={SignupFormContainer} />
            <ProtectedRoute exact path="/dogs" component={DogsContainer} />
            <ProtectedRoute exact path="/adddog" component={DogFormContainer} />
            <Redirect to="/" /> 
        </Switch>
        <Footer />


    </div>
);

export default App;