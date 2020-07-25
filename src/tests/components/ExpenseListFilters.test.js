import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, setStartDate, setEndDate, sortByAmount, wrapper, onFocusChange;

beforeEach(() => {
     setTextFilter = jest.fn();
     sortByDate = jest.fn();
     setStartDate = jest.fn();
     setEndDate =  jest.fn();
     sortByAmount = jest.fn();
     
     wrapper= shallow(
       <ExpenseListFilters 
        xmlns="http://www.w3.org/1999/xhtml"
        filters = {filters}
        setTextFilter = {setTextFilter}
        sortByDate = {sortByDate}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        sortByAmount = {sortByAmount}
          />);
    
});
test('should render ExpenseListFilters correctly',() => {
     expect(wrapper).toMatchSnapshot();    
});

test('should render ExpenseListFilters with alt data correctly',() => {
     wrapper.setProps({
          filters: altFilters
     });
     expect(wrapper).toMatchSnapshot();    
});

test('should handle text change',() => {
    const value = "description change";
    wrapper.find('input').at(0).simulate('change',{
          target: {value}
     });
    
     expect(setTextFilter).toHaveBeenLastCalledWith(value);    
});

test('should handle sort by date',() => {
     //make sure the correct prop was called
     const value = "date";
     wrapper.find('select').at(0).simulate('change',{
               target: {value}
          });
     expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should handle sort by amount',() => {
     //make sure the correct prop was called
     const value = "amount";
     wrapper.find('select').at(0).simulate('change',{
               target: {value}
          });
     expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle date changes',() => {
     wrapper.setProps({
          filters: altFilters
     });
     const startDate = altFilters.startDate;
     const endDate = altFilters.endDate;
     wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
     expect(setStartDate).toHaveBeenLastCalledWith(startDate);
     expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change',() => {
     //coming from state not a prop
     wrapper.setProps({
          filters: altFilters
     });
     const startDate = altFilters.startDate;
     const endDate = altFilters.endDate;
     const calendarFocused = "startDate";
     wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
     expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);
     expect(wrapper).toMatchSnapshot();
     
});