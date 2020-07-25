 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
 import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
 import AddExpensePage from '../components/AddExpensePage';
 import HelpPage from '../components/HelpPage';
 import EditExpensePage from '../components/EditExpensePage';
 import NotFoundPage from '../components/NotFoundPage';
 import Header from '../components/Header';
const AppRouter = () => (
  <BrowserRouter xmlns="http://www.w3.org/1999/xhtml">
     <div>
     <Header />
     <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage}/>
          <Route path="/help" component={HelpPage}/>
          <Route path="/edit/:id" component={EditExpensePage}/>
          <Route component={NotFoundPage} />
     </Switch>
     </div>
  </BrowserRouter>
  );






 export default AppRouter;