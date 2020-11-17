 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
  import uuid from 'uuid';
  import database from '../firebase/firebase';
 //ADD EXPENSE
 //pay attention - this fnc takes a parameter; an object, it is using destructuring and default values. Notice
 //it also is implicitly returning an object.
 //we have already prepared the add expense object in startAddExpense
 export const addExpense = (expense) => ({
      type: 'ADD_EXPENSE',
      expense 
      
});
//look; here we are taking in expense data and again destructuring it, we are creating consts here .
export const startAddExpense = (expenseData = {}) => {
      return (dispatch) => {
           const {
               description='',
               amount=0,
               note='',
               createdAt=0
           } = expenseData;
//these consts are then added to an object to be sent to databse
           const expense = {description,amount,note,createdAt};
          return database.ref('expenses').push(expense)
           //now when that's been done successfully we will add the same data to Redux
             .then((ref) => {
                  //note that firebase has already given us an id and we can access that ref
                  //we create a new obj to hold id and expense data
                  dispatch(addExpense({
                       id: ref.key,
                         ...expense
                  }));
             });
      };
 };
export const removeExpense = ({id}={}) => ({
     type: 'REMOVE_EXPENSE',
     id
});
export const editExpense = (id,updates) => ({
 type: 'EDIT_EXPENSE',
      id,
      updates
 
});
