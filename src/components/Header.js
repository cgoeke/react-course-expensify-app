import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="">Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
); 

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    };
};

export default connect(undefined, mapDispatchToProps)(Header);