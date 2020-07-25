import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
test('should set default state',() => {
     const state = expensesReducer(undefined, {type: '@@INIT'});
     expect(state).toEqual([]);   
});

test('should remove expense by id',() => {
     const action = {
          type: 'REMOVE_EXPENSE',
          id: expenses[1].id
     };
     const state = expensesReducer(expenses,action);
     expect(state).toEqual([expenses[0],expenses[2]]);
     
});

test('should not remove expenses if id not found',() => {
     const action = {
          type: 'REMOVE_EXPENSE',
          id: '5'
     };
     const state = expensesReducer(expenses,action);
     expect(state).toEqual([expenses[0],expenses[1],expenses[2]]);
     
});


test('should edit expense',() => {
     const editedExpense = {
          id: '2',
          description: 'none',
          note:'',
          amount: 50,
          createdAt : moment(0).subtract(4,'days').valueOf()          
     };
     const updates = {
           description:'none',
           amount:50,
           note:''    
     };
     const action = {
          type: 'EDIT_EXPENSE',
          id: expenses[1].id,
          updates: updates
     };
     const state = expensesReducer(expenses,action);
     expect(state).toEqual([expenses[0],editedExpense,expenses[2]]);
         
});
