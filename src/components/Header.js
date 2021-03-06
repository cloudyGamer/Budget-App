import React from 'react'; 
 import { NavLink } from 'react-router-dom';
 import { connect } from 'react-redux';
 import { startLogout } from '../actions/auth';


export const Header = ({ startLogout }) => (
  <header>
  <h1>Expensify App</h1>
  <NavLink xmlns="http://www.w3.org/1999/xhtml" to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
  <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
  <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  <button onClick={startLogout}>Logout</button>
  </header>
  );
const mapDispatchToProps = (dispatch) => ({
     startLogout: () => dispatch(startLogout())
});
 export default connect(undefined,mapDispatchToProps)(Header);