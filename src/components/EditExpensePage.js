 
import React from 'react'; 
import { connect } from 'react-redux';
import { startEditExpense,editExpense,removeExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
     onSubmit = (expense) => {
          //console.log("updated",expense);
          this.props.startEditExpense(this.props.expense.id,expense);
          this.props.history.push(`/`);
     };
     
     onRemove = () => {
          this.props.startRemoveExpense({id: this.props.expense.id});
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
                    onClick={this.onRemove}>Remove</button>
               </div>  
            );
     }
};
const mapDispatchToProps = (dispatch,props) => ({
     startEditExpense: (expenseid,expense) => dispatch(startEditExpense(expenseid,expense)),
     startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
});

const mapStateToProps = (state,props) => {
     return {
          expense : state.expenses.find((expense) => expense.id===props.match.params.id)
     };
};

 export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);