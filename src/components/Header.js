import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    {/* <Link to="/">Dashboard</Link>  we use navlink for navigation*/}
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>  
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
)

export default Header;
