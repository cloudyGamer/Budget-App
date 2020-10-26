import React from 'react';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';

//export const ExpensesSummary = (props) => (
//   {/*  <div>
//   {
//   props.expenses.length !== 0 &&
//     <div>
//   <a>Displaying</a>  <a>{props.expenses.length}</a> { props.expenses.length === 1 ? (<a>expense</a> ) : (<a>expenses</a>)}
//      <a> with a value of </a> 
//       <a>{props.expenses
//       .map((expense)=>expense.amount)
//       .reduce((total,num) => total+num, 0)}
//       </a>
//     </div> 
//          
//          }
//   </div>*/}  
//
//   );

     
export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
     const expenseWord = expenseCount ===1 ? 'expense':'expenses';
     const formattedTotal = numeral(expensesTotal/100).format('€0,0.00');
     return (
       <div>
       <h1>Viewing {expenseCount} {expenseWord} totalling {formattedTotal} euro</h1>
       </div>  
       );
};  

const mapStateToProps = (state) => {
     const visibleExpenses = selectExpenses(state.expenses, state.filters);
      return {
           expenseCount: visibleExpenses.length,
           expensesTotal: selectExpensesTotal(visibleExpenses)
           
      };
 };

export default connect(mapStateToProps)(ExpensesSummary);
