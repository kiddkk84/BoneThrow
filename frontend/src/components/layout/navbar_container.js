
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearCurrentProfile } from "../../actions/profile_actions";

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

export default connect(
    mapStateToProps,
    { logout, clearCurrentProfile}
)(NavBar);