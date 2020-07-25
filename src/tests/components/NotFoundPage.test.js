import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundPage } from '../../components/NotFoundPage';
import expenses from '../fixtures/expenses';

test('should render NotFoundPage', () => {
     const wrapper= shallow(<NotFoundPage xmlns="http://www.w3.org/1999/xhtml" />);
     expect(wrapper).toMatchSnapshot();
});