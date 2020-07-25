 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
 import React from 'react';
 import { connect } from 'react-redux';
 import ExpenseListItem from './ExpenseListItem';
 import selectExpenses from '../selectors/expenses';
 export const ExpenseList = (props) => (
   <div>
   {
   props.expenses.length === 0 ? (<p>no expenses</p>) : (
   props.expenses.map((expense) => {
        return <ExpenseListItem  
         {...expense}
         key={expense.id}
        />
        })
          )
          }
   </div>  

   );
const mapStateToProps = (state) => {
      return {
           expenses: selectExpenses(state.expenses, state.filters)
      };
 };
export default connect(mapStateToProps)(ExpenseList);