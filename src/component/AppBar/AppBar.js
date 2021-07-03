import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AppBar = () => {
    return (
        <ul className="AppBarList">
            <li className="AppBarComponent">
            <NavLink
                    exact
                    to={routes.home}
                    className="NavLink"
                    activeClassName="NavLink--active">
                    Home
            </NavLink>
            </li>
            <li className="AppBarComponent">
            <NavLink
                to={routes.movies}
                className="NavLink"
                activeClassName="NavLink--active">
                    Movies
            </NavLink>
            </li>
        </ul>
     );
}
 
export default AppBar;