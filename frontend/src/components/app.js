import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';
// import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import Menu from "./nav/Menu";

import DogFormContainer from './dogs/dog_form_container';
import DogsContainer from './dogs/dogs_container';


const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        {/* <Menu /> */}
        <Switch>
            <Route exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/dogs" component={DogsContainer} />
            <ProtectedRoute exact path="/adddog" component={DogFormContainer} />
            <Redirect to="/" /> 
        </Switch>


    </div>
);

export default App;