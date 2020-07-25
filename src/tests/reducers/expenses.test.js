import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import uuid from 'uuid';

//make sure default state gets set to an empty array
test('should set up default expenses values',() => {
     const state = expensesReducer(undefined,{type: '@@INIT'});
     expect(state).toEqual(
       []
       );
});

test('should set up remove expense by id',() => {
     const action = {
          type:'REMOVE_EXPENSE',
          id: expenses[0].id
     };
     const state = expensesReducer(expenses,action);
     expect(state).toEqual(
       
       [expenses[1],expenses[2]]
       
       );
});

test('should not remove expense by id',() => {
     const action = {
          type:'REMOVE_EXPENSE',
          id: ''
     };
     const state = expensesReducer(expenses,action);
     expect(state).toEqual(
       
       [expenses[0],expenses[1],expenses[2]]
       
       );
});

test('should set up edit expense',() => {
     const updates = {
          description: 'new desc',
          note:'new note',
          amount: 500

     };
     const updatedExpense = {
         id: expenses[0].id,
         description: 'new desc',
         note:'new note',
         amount: 500,
         createdAt: expenses[0].createdAt
     };
     const action = {
          type:'EDIT_EXPENSE',
          id: expenses[0].id,
          updates: updates
     };
     
     const state = expensesReducer(expenses,action);
     expect(state).toEqual(
       
       [updatedExpense,expenses[1],expenses[2]]
       
       );
});

//should not edit expense
test('should not set up edit expense if id not found',() => {
     const updates = {
          description: 'new desc',
          note:'new note',
          amount: 500

     };
     const updatedExpense = {
         id: expenses[0].id,
         description: 'new desc',
         note:'new note',
         amount: 500,
         createdAt: expenses[0].createdAt
     };
     const action = {
          type:'EDIT_EXPENSE',
          id: '6',
          updates: updates
     };
     
     const state = expensesReducer(expenses,action);
     expect(state).toEqual(
       
       [expenses[0],expenses[1],expenses[2]]
       
       );
});
//should add expense
test('should add expense',() => {
     
     const newExpense = {
         id: '4',
         description: 'new desc',
         note:'new note',
         amount: 500,
         createdAt: moment(0)
     };
     
     const action = {
          type:'ADD_EXPENSE',
          expense : newExpense
     };
     
     const state = expensesReducer(expenses,action);
     expect(state).toEqual(
       
       [expenses[0],expenses[1],expenses[2],newExpense]
       
       );
});