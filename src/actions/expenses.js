 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
  import uuid from 'uuid';
 //ADD EXPENSE
 export const addExpense = ({
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
export const removeExpense = ({id}={}) => ({
     type: 'REMOVE_EXPENSE',
     id
});
export const editExpense = (id,updates) => ({
 type: 'EDIT_EXPENSE',
      id,
      updates
 
});
