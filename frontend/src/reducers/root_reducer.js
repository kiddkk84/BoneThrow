import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './session_errors_reducer'
// import tweets from './tweets_reducer';
import dogs from './dogs_reducer';
import profileReducer from './profile_reducer';
import postReducer from "./post_reducer";

const RootReducer = combineReducers({
    session,
    errors,
    // tweets
    dogs,
    profile: profileReducer,
    post: postReducer

});

export default RootReducer;