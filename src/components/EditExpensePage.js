 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
import React from 'react'; 
import { connect } from 'react-redux';
import { editExpense,removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
     onSubmit = (expense) => {
          console.log("updated",expense);
          this.props.editExpense(this.props.expense.id,expense);
          this.props.history.push(`/`);
     };
     
     removeExpense = () => {
          this.props.removeExpense({id: this.props.expense.id});
          this.props.history.push(`/`);
     };
     render(){
          return(
               <div>
                 <h1>Expense Form</h1>    
                    <ExpenseForm xmlns="http://www.w3.org/1999/xhtml"
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    /> 
                    <button 
                    onClick={this.removeExpense}>Remove</button>
               </div>  
            );
     }
};
const mapDispatchToProps = (dispatch,props) => ({
     editExpense: (expenseid,expense) => dispatch(editExpense(expenseid,expense)),
     removeExpense: (expense) => dispatch(removeExpense(expense))
});

const mapStateToProps = (state,props) => {
     return {
          expense : state.expenses.find((expense) => expense.id===props.match.params.id)
     };
};

 export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);