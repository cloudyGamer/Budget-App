 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
 import thunk from 'redux-thunk';
 import expensesReducer from '../reducers/expenses';
 import filtersReducer from '../reducers/filters';
 import authReducer from '../reducers/auth';
 
 //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
 const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

 export default () => {
  const store = createStore(
       combineReducers(
       {expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer
       }),
       composeEnhancers(applyMiddleware(thunk))
       //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
     return store;
 };


