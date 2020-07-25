
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
import { addExpense } from './actions/expenses';
//import filters
import { setTextFilter } from './actions/filters';

const store = configureStore();
store.subscribe(() => {
     const state = store.getState();
     const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
     console.log(visibleExpenses);
});
const expenseOne = store.dispatch(addExpense({description: 'water Bill',amount:4500}));
const expenseTwo = store.dispatch(addExpense({description: 'gas Bill',createdAt:1000}));
store.dispatch(addExpense({description: 'rent',amount:109500 }));

const jsx = (
  <Provider xmlns="http://www.w3.org/1999/xhtml" store={store}>
  <AppRouter />
  </Provider>
  );
ReactDOM.render(jsx, document.getElementById('app'));

//

