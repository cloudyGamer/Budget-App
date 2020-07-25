
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Set up removeExpense',() => {
     const action = removeExpense({ id:'123' });
     expect(action).toEqual(
       {
            type: 'REMOVE_EXPENSE',
            id: '123'
          
       }
       );
});

test('set up editExpense',() => {
     const action = editExpense('123', {note:'set note'});
     expect(action).toEqual(
       {
            type: 'EDIT_EXPENSE',
            id: '123',
            updates: {note:'set note'}
          
       }
       );
});

test('should set up addExpense with provided values',() => {
     const expenseData = {
          description:'rent',
          amount: 109500,
          createdAt:1000,
          note: 'this was last months rent'
     }
     const action = addExpense(expenseData);
     expect(action).toEqual(
       {
            type: 'ADD_EXPENSE',
            expense : {
                   ...expenseData,
                   id: expect.any(String)
            }
          
       }
       );
});

test('should set up AddExpense with default values',() => {
     const action = addExpense();
     expect(action).toEqual(
       {
            type: 'ADD_EXPENSE',
            expense : {
                  description:'',
                    amount:0,
                    note:'',
                    createdAt:0,
                    id: expect.any(String)
            }
          
       }
       );
});