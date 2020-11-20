import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage }  from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
let startEditExpense, startRemoveExpense, editExpense, removeExpense, history, wrapper, id;

beforeEach(() => {
      id = expenses[1].id;
      startEditExpense = jest.fn();
      removeExpense = jest.fn();
      startRemoveExpense = jest.fn();
      history = { push:jest.fn() };
      wrapper= shallow(<EditExpensePage
                         startRemoveExpense={startRemoveExpense}
                         removeExpense={removeExpense}
                         startEditExpense={startEditExpense} 
                         history={history}
                         expense={expenses[1]}
                         xmlns="http://www.w3.org/1999/xhtml" />);
});

test('should render edit expense page',() => {
     expect(wrapper).toMatchSnapshot();
});

test('should edit expense',() => {
     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
     expect(history.push).toHaveBeenLastCalledWith("/");
     expect(startEditExpense).toHaveBeenLastCalledWith(id,expenses[1]);        
});

test('should remove expense',() => {
     wrapper.find('button').simulate('click');
     expect(history.push).toHaveBeenLastCalledWith("/");
     expect(startRemoveExpense).toHaveBeenLastCalledWith({id:id});    
});