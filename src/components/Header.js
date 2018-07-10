import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="">Help</NavLink>
    </header>
); 

export default Header;