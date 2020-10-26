import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
//let wrapper;
//beforeAll(
//  
//  );

test('should render ExpensesSummary with 1 expense', () => {
     const wrapper= shallow(<ExpensesSummary xmlns="http://www.w3.org/1999/xhtml" expenseCount={1} expensesTotal={235}/>);
     expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
     const wrapper= shallow(<ExpensesSummary xmlns="http://www.w3.org/1999/xhtml" expenseCount={3} expensesTotal={235455}/>);
     expect(wrapper).toMatchSnapshot();
});