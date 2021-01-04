 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
 import createHistory from 'history/createBrowserHistory';
 import React from 'react';
 import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
 import AddExpensePage from '../components/AddExpensePage';
 import EditExpensePage from '../components/EditExpensePage';
 import NotFoundPage from '../components/NotFoundPage';
 import Header from '../components/Header';
 import LoginPage from '../components/LoginPage';
 import PrivateRoute from './PrivateRoute';
 import PublicRoute from './PublicRoute';
 
 export const history = createHistory();
 
const AppRouter = () => (
  <Router history={history} xmlns="http://www.w3.org/1999/xhtml">
     <div>
     <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
          <PrivateRoute path="/create" component={AddExpensePage}/>
          <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
          <Route component={NotFoundPage} />
     </Switch>
     </div>
  </Router>
  );






 export default AppRouter;