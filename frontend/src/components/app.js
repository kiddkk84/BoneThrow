import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBarContainer from './layout/navbar_container';
// import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
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
import DogShowContainer from './dogs/dog_show_container';
import DogMapContainer from './map/map_container';
import ShopPage from './shoppage/shoppage.component';
// const HatsPage = () => (
//     <div>
//         <h1>HATS PAGE</h1>
//     </div>
// )

const App = () => (
    <div style={{position:`relative`}}>
        <NavBarContainer />
        {/* <HomePage /> */}
        {/* <Menu /> */}
        <Switch>
            <Route exact path='/shop' component={ShopPage} />
            <ProtectedRoute path="/dog/:dogId" component={DogShowContainer} />
            <Route exact path="/" component={Landing} />
            <ProtectedRoute exact path="/dogmap" component={DogMapContainer} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/feed" component={Posts} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/register" component={SignupFormContainer} />
            <ProtectedRoute exact path="/dogs" component={DogsContainer} />
            <ProtectedRoute exact path="/adddog" component={CreateProfile} />
            <Redirect to="/" /> 
        </Switch>
        <Footer/>


    </div>
);

export default App;