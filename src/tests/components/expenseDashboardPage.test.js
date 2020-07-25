import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseDashboardPage } from '../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';

test('should render ExpenseDashboardPage with no props', () => {
     const wrapper= shallow(<ExpenseDashboardPage xmlns="http://www.w3.org/1999/xhtml" />);
     expect(wrapper).toMatchSnapshot();
});