 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
 import {createStore, combineReducers} from 'redux';
 import uuid from 'uuid';
 //ADD EXPENSE
 const addExpense = ({
      description='',
      amount=0,
      note='',
      createdAt=0
 }={}
     ) => ({
      type: 'ADD_EXPENSE',
      expense : {
           id:uuid(),
           description,
           note,
           amount,
           createdAt
      }
      
});
const removeExpense = ({id}={}) => ({
     type: 'REMOVE_EXPENSE',
     id
});
const editExpense = (id,updates) => ({
 type: 'EDIT_EXPENSE',
      id,
      updates
 
});
const sortByDate = () => ({
     type: 'SORT_BY_DATE'
});
const sortByAmount = () => ({
     type: 'SORT_BY_AMOUNT'
     
});
const setStartDate = (date={}) => ({
     type: 'SET_START_DATE',
     date
     
});
const setEndDate = (date={}) => ({
     type: 'SET_END_DATE',
     date
     
});
const setTextFilter = (text={}) => ({
     type: 'SET_TEXT_FILTER',
     text
     
});
 const expensesReducerDefaultState = [];
 const expensesReducer = (state = expensesReducerDefaultState,action) => {
      switch(action.type){
           case 'ADD_EXPENSE':
           return [
                  ...state,
                  action.expense
           ];
          case 'REMOVE_EXPENSE':
          return state.filter(({id}) => id !== action.id);
          
     case 'EDIT_EXPENSE':
         return state.map((expense)=>{
              if(expense.id===action.id){
                   return{...expense,
                          ...action.updates
                   };
              }else{return expense;}
         }
           );
          
           default:
                return state;
      }
};
//filters reducer
const filtersReducerDefaultState = {
     text: '',
     sortBy:'date',
     startDate: undefined,
     endDate: undefined
};
 const filtersReducer = (state = filtersReducerDefaultState,action) => {
      switch(action.type){
           case 'SET_TEXT_FILTER':
                
           return {...state,
                   text:action.text
           };
           
           case 'SORT_BY_AMOUNT':
           return {...state,
                sortBy:'amount'
           };
           case 'SORT_BY_DATE':
           return {...state,
                sortBy:'date'
           };
      case 'SET_START_DATE':
      return {
             ...state,
             startDate:action.date
      };
      case 'SET_END_DATE':
      return {
             ...state,
             endDate:action.date
      };
           default:
                return state;
      }
};
//get visible filter
const getVisibleExpenses = (expenses,{ text,sortBy,startDate,endDate }) => {
  return expenses.filter((expense) => {
       const startDateMatch = typeof startDate !== 'number'|| expense.createdAt >= startDate;
       const endDateMatch = typeof endDate !== 'number'|| expense.createdAt <= endDate;
       const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
       return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
       if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1: -1;
       }else if(sortBy==='amount'){
            return a.amount < b.amount? 1:-1;
       }
  });   
};

const store = createStore(
  combineReducers(
  {expenses: expensesReducer,
   filters: filtersReducer
}
  )
  );

store.subscribe(() => {
     const state = store.getState();
     const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
     console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'rent',amount:200,createdAt:1000 }));
const expenseTwo = store.dispatch(addExpense({description: 'Toilet Paper',amount:30000,createdAt:-1000 }));
//store.dispatch(removeExpense({id:expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));
//store.dispatch(sortByDate());
//store.dispatch(sortByAmount());
//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate(1250));
//store.dispatch(setEndDate(1250));
store.dispatch(setTextFilter('toilet'));
 const demoState = {
      expenses : [
           {
                id: 'sfsfsfe',
                desc: 'jan rent',
                note : 'money',
                amount: 54500,
                createdAt: 0
           }
      ],
      filters : {
           text:'rent',
           sortBy: 'amount',
           startDate: undefined,
           endDate: undefined
      }
 };
