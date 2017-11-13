import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName='is-active' exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName='is-active'>Create expense</NavLink>
            <NavLink to="/help" activeClassName='is-active'>Help</NavLink>
        </header>
    );
}

export default Header;
