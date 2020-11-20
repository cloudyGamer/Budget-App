import configureStore from 'redux-mock-store';
 import thunk from 'redux-thunk';
import { startRemoveExpense, startSetExpenses, setExpenses, startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
 //import expenses from '../../actions/expenses';
 import expenses from '../fixtures/expenses'; 
 import database from '../../firebase/firebase';
 const createMockStore = configureStore([thunk]);
 
beforeEach(
   (done) => {
     //do I just clear the database here by setting expenses.No need; its 
     //its automatocally rewritten
    
     const expensesData = {}; 
     expenses.forEach(({ id, description, note, amount, createdAt }) => {
           expensesData[id]={ description, note, amount, createdAt };
      });
     database.ref('expenses').set(expensesData).then(() => {
           done();
      });
 }
  );
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

 test('should set up expenses from firebase', (done) => {
      const store = createMockStore({});
      store.dispatch(startSetExpenses()).then(() => {
           const actions = store.getActions();
           //this doesnt refer to the reducer array -its the action object passed to 
           //our action generator
           expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
           });
           return database.ref('expenses').once('value');
      }).then(
        (snapshot) => {
                const expensesData = [];
                const val =  snapshot.forEach((snap) => {
                     expensesData.push({
                          id:snap.key,
                          ...snap.val()
                     });
                });
                expect(expensesData).toEqual(expenses);
                done();
           });     
//     const action=setExpenses(expenses);
//     expect(action).toEqual({
//          type:'SET_EXPENSES',
//          expenses
//     });
     
      
 });
 
 test('should remove expense in firebase', (done) => {
     //call via id and see do you get null back 
     const store = createMockStore({});
     const expense = expenses[1];
     const id = expense.id;
      store.dispatch(startRemoveExpense({id})).then(() => {
           const actions = store.getActions();
           //this doesnt refer to the reducer array -its the action object passed to 
           //our action generator
           expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id
           });
           return database.ref(`expenses/${id}`).once('value');
      }).then(
        (snapshot) => {
               expect(snapshot.val()).toBeFalsy();
                done();
           });  
 });
 