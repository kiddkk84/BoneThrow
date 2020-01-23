import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './session_errors_reducer'
// import tweets from './tweets_reducer';
import dogs from './dogs_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    // tweets
    dogs,

});

export default RootReducer;