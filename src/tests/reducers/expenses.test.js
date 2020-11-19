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
//verify that the correct type is called from our action generators, and that firebase is getting sent the correct values
//we need to look at its asynchronicity which differentiates it from previous tests here.
//'passed' first test just looking at state - look at generator - does it dispatch to firebase? no it doesn't but 
//none of the reducers do. Do I need a start SetExpense in my action generators.
//we need the code that extracts the expenses using a forEach and prepares it to be sent
test('should set expenses', () => {
     const action = {
          type:'SET_EXPENSES',
          expenses : [expenses[1]]
     };
     
     const state = expensesReducer(expenses,action);
     expect(state).toEqual(
       [expenses[1]]
       );
});