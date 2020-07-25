import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage }  from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';
let addExpense,history,wrapper;

beforeEach(function() {
     addExpense = jest.fn();
     history = { push: jest.fn() };
     wrapper= shallow(<AddExpensePage addExpense={addExpense} history={history} xmlns="http://www.w3.org/1999/xhtml" />);   
});

test('should render addExpense page correctly',() => {
     expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit',() => {
     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
     expect(history.push).toHaveBeenLastCalledWith("/");
     expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});