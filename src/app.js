
import TemplateComponent from './components/TemplateComponent';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
//import addExpense
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
//import filters
import { login,logout } from './actions/auth';
import  { firebase } from './firebase/firebase';
 //import  './playground/codilityRevision.js';
 

const store = configureStore();
store.subscribe(() => {
     const state = store.getState();
     const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
     console.log(visibleExpenses);
});


const jsx = (
  <Provider xmlns="http://www.w3.org/1999/xhtml" store={store}>
  <AppRouter />
  </Provider>
   );
 let hasRendered = false;
 const renderApp = () => {
      if (!hasRendered) {
          ReactDOM.render(jsx, document.getElementById('app'));
          hasRendered = true;
      } 
 };
 
 ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

 firebase.auth().onAuthStateChanged((user) => {
      if (user) {
           console.log(`logged in. user: ${user.uid}`);
           store.dispatch(login(user.uid));
           store.dispatch(startSetExpenses())
             .then(renderApp());
           if (history.location.pathname === '/') {
                history.push('/dashboard');
           }
      } else {
           store.dispatch(logout());
           renderApp();
           history.push('/');
      }
 });

