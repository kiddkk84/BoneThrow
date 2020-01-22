
import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let nextState = {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };

            return nextState
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        case RECEIVE_USER_SIGN_IN:
            console.log("hellooooooooooooooo");
            let nextState = {
                ...state,
                isSignedIn: true
            }
            return nextState
        default:
            return state;
    }
}