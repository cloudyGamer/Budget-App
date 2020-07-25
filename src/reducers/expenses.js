 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
 const expensesReducerDefaultState = [];
 export default   (state = expensesReducerDefaultState,action) => {
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
                   return{
                         ...expense,
                         ...action.updates
                   };
              }else{
                   return expense;
              }
         }
           );
          
           default:
                  return state;
      }
};

