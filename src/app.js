
import TemplateComponent from './components/TemplateComponent';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
//import addExpense
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
//import filters
import { setTextFilter } from './actions/filters';
import  { firebase } from './firebase/firebase';

 

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
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(
   startSetExpenses()
).then(
     //return reference 1
     () => {ReactDOM.render(jsx, document.getElementById('app'));});

firebase.auth().onAuthStateChanged((user) => {
      if (user) {
           console.log('logged in');
      } else {
           console.log('logged out');
      }
 });

