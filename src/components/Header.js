 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
import React from 'react'; 
 import {Link,NavLink} from 'react-router-dom';
const Header = () => (
  <header>
  <h1>Expensify App</h1>
  <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
  <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
  <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
  );

 export default Header;