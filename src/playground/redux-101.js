 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
import {createStore} from 'redux';
const countReducer = (state={count:0},action)=>{
     console.log('running');
     switch(action.type) {
          case 'INCREMENT': 
               return {
             count: state.count + action.incrementBy       
          };
          case 'DECREMENT':
               return {
             count: state.count - action.decrementBy       
          };
          case 'RESET': return {
             count: 0      
          };
          case 'SET' :
          return {
               count: action.setTo
          };
     default: return state;
     }
};
const incrementCount = ({incrementBy = 1}={} ) => ({
          type: 'INCREMENT',
          incrementBy
});
const decrementCount = ({decrementBy = 1}={} ) => ({
          type: 'DECREMENT',
          decrementBy
});
const setCount = ({setTo = 1}={} ) => ({
          type: 'SET',
          setTo
});
const resetCount = () => ({
          type: 'RESET'
          
});
const store = createStore(countReducer);
const unsubscribe = store.subscribe(()=>{
     console.log(store.getState());
});


store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());
//unsubscribe();

store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({setTo:5}));

//console.log(store.getState());