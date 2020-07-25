import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with message', () => {
     const wrapper= shallow(<ExpenseListItem 
     xmlns="http://www.w3.org/1999/xhtml" {...expenses[0]} key={expenses[0].id}
       />);
     expect(wrapper).toMatchSnapshot();
});
