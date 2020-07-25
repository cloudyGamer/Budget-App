import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm  from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm', () => {
     const wrapper= shallow(<ExpenseForm xmlns="http://www.w3.org/1999/xhtml" />);
     expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expenses', () => {
     const wrapper= shallow(<ExpenseForm xmlns="http://www.w3.org/1999/xhtml" expense={expenses[1]}/>);
     expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
     const wrapper= shallow(<ExpenseForm xmlns="http://www.w3.org/1999/xhtml" />);
     expect(wrapper).toMatchSnapshot();
     wrapper.find('form').simulate('submit',{
          preventDefault: () => {}
     });
     expect(wrapper.state('error').length).toBeGreaterThan(0);
     expect(wrapper).toMatchSnapshot();
});

test('should should set description on input change',() => {
     const value = "description change";
     const wrapper= shallow(<ExpenseForm xmlns="http://www.w3.org/1999/xhtml" />);
     wrapper.find('input').at(0).simulate('change',{
          target: {value}
     });
     expect(wrapper.state('description')).toBe(value);
     expect(wrapper).toMatchSnapshot();
});

test('should should set note on input change',() => {
     const value = "note change";
     const wrapper= shallow(<ExpenseForm xmlns="http://www.w3.org/1999/xhtml" />);
     wrapper.find('textarea').simulate('change',{
          target: {value}
     });
     expect(wrapper.state('textArea')).toBe(value);
     expect(wrapper).toMatchSnapshot();
});

//valid amount change
test('should set amount if valid input',() => {
     const value = '50.00';
     const wrapper= shallow(<ExpenseForm xmlns="http://www.w3.org/1999/xhtml" />);
     wrapper.find('input').at(1).simulate('change',{
          target: {value}
     });
     expect(wrapper.state('amount')).toBe(value);
     expect(wrapper).toMatchSnapshot();
     
});
//invalid amount change
test('should not set amount if invalid input',() => {
     const value = '50.122';
     const wrapper= shallow(<ExpenseForm xmlns="http://www.w3.org/1999/xhtml" />);
     wrapper.find('input').at(1).simulate('change',{
          target: {value}
     });
     expect(wrapper.state('amount')).toBe('');
     expect(wrapper).toMatchSnapshot();
     
});

//onSubmit spy
test('should call onSubmit prop for valid form submission',() => {
     const onSubmitSpy = jest.fn();
     const wrapper= shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} xmlns="http://www.w3.org/1999/xhtml" />);
     wrapper.find('form').simulate('submit',{
          preventDefault: () => {}
     });
     expect(wrapper.state('error')).toBe('');
     expect(onSubmitSpy).toHaveBeenLastCalledWith(
       {  
          description: expenses[0].description,
          amount: expenses[0].amount,
          textArea: expenses[0].textArea,
          createdAt: expenses[0].createdAt
     }
       );
});

test('should set new date on date change',() => {
     const now = moment();
     const wrapper= shallow(<ExpenseForm xmlns="http://www.w3.org/1999/xhtml" />); 
     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
     expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change',() => {
     const wrapper= shallow(<ExpenseForm xmlns="http://www.w3.org/1999/xhtml" />);
     wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused:true });
     expect(wrapper.state('calendarFocused')).toEqual(true);
});