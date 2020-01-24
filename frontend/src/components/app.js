import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import Menu from "./nav/Menu";
import DogMap from './map/dog_map'

const App = () => (
    <div>
        <NavBarContainer />
        {/* <Menu /> */}
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/map" component={DogMap} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Redirect to="/" /> 
        </Switch>


    </div>
);

export default App;