import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { STATES } from 'mongoose';



const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' }
    } else {
        return { color: '#ffffff' };
    }
}

let style = {
    "color": "#6626ff",
    "fontWeight": "bold"
} 
const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
            </li>

            {!window.getState().session.isAuthenticated ? 
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/login')} to="/login">Login</Link>
                </li>
                : null}

            {!window.getState().session.isAuthenticated ? 
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Signup</Link>
                </li>
            : null}

            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/dogs')} to="/dogs">See All Dogs</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/adddog')} to="/adddog">Add your Dog</Link>
            </li>
            
            { window.getState().session.isAuthenticated ? 
            <li className="nav-item">
                <Link onClick={()=> window.dispatch(window.logout())} style={style} className="nav-link">Logout</Link>
            </li>
            : null}
            {/* <button onClick={logout}>Logout</button> */}

        </ul>
    </div>
)

export default withRouter(Menu);