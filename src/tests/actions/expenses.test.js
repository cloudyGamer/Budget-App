import configureStore from 'redux-mock-store';
 import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
 //import expenses from '../../actions/expenses';
 import expenses from '../fixtures/expenses'; 
 import database from '../../firebase/firebase';
 const createMockStore = configureStore([thunk]);

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
//it doesn't have an id yet because it hasn't gone to firebase
test('should set up addExpense with provided values',() => {
     const action = addExpense(expenses[2]);
     expect(action).toEqual(
       {
            type: 'ADD_EXPENSE',
            expense :expenses[2]
       }
       );
});

test('should add expense to database and store', (done) => {
      //we need to test not only that dispatch and our firebase call worked but that the correct action dispatched
      //<editor-fold defaultstate="collapsed" desc="step 1">
     const store = createMockStore({});
     //</editor-fold>

     //<editor-fold defaultstate="collapsed" desc="step 2">
     const expenseData = 
       {
            description: 'rent',
          note: '',
          amount: 33000,
          createdAt: 10000
     };
     //</editor-fold>

     //<editor-fold defaultstate="collapsed" desc="step 3">
     store.dispatch(startAddExpense(expenseData)).then(() => {
          const actions = store.getActions();
          //<editor-fold defaultstate="collapsed" desc="step 4">
          expect(actions[0]).toEqual({
               type: 'ADD_EXPENSE',
               expense: {
                    id: expect.any(String),
                    ...expenseData
               }
          });
          //</editor-fold>

          //<editor-fold defaultstate="collapsed" desc="step 5">
          return database.ref(`expenses/${actions[0].expense.id}`).once('value');
          //</editor-fold>
     }).then(
       //<editor-fold defaultstate="collapsed" desc="step 6">
     (snapshot) => {
          expect(snapshot.val()).toEqual(expenseData);
          done();
     }
       //</editor-fold>
);
     //</editor-fold>
 
 });
//revision
// test('should add expense to database and store revision', () => {
//     
// });
 test('should add expense with defaults to database and store', (done) => {
      //we need to test not only that dispatch and our firebase call worked but that the correct action dispatched
      const store = createMockStore({});
      const expenseData = 
        {
             description: '',
             note: '',
             amount: 0,
             createdAt: 0
        };
       const defaultExpense = {};
      store.dispatch(startAddExpense(defaultExpense)).then(() => {
           const actions = store.getActions();
           expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                     id: expect.any(String),
                       ...expenseData
                }
           });
           return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      }).then(
        (snapshot) => {
                expect(snapshot.val()).toEqual(expenseData);
                done();
           }); 
 });

//test('should set up AddExpense with default values',() => {
//     const action = addExpense();
//     expect(action).toEqual(
//       {
//            type: 'ADD_EXPENSE',
//            expense : {
//                  description:'',
//                    amount:0,
//                    note:'',
//                    createdAt:0,
//                    id: expect.any(String)
//            }
//          
//       }
//       );
//});