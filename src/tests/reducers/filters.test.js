import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values',() => {
     const state = filtersReducer(undefined,{type: '@@INIT'});
     expect(state).toEqual(
       {
          text:'',
          sortBy:'date',
          startDate: moment().startOf('month'),
          endDate: moment().endOf('month')   
       }
       );
});

test('should set up sortBy to amount',() => {
     const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
     expect(state.sortBy).toBe(
            'amount'
       );
});

test('should set up sortBy to date',() => {
     const currentState = {
     startDate: undefined,
     endDate: undefined,
     sortBy:'amount'
     };
     const action = {type: 'SORT_BY_DATE'};
     const state = filtersReducer(currentState, action);
     expect(state.sortBy).toBe(
          'date'
       );
});

//set text filter
test('should set sortBy to set text filter',() => {
     const text = 'you made me look a right mug';
     const action = {
          type:'SET_TEXT_FILTER',
          text: text
     };
     const state = filtersReducer(undefined, action);
     expect(state.text).toBe(
            'you made me look a right mug'
       );
});

//should set startDate filter
test('should set sortBy to startDate filter',() => {
     const action = {
          type: 'SET_START_DATE',
          date: 0
     };
     const state = filtersReducer(undefined, action);
     expect(state.startDate).toBe(
            0
       );
});

//should set endDate filter
test('should set sortBy to startDate filter',() => {
     const date = moment(0).add(4,'days').valueOf();

     const action = {
          type: 'SET_START_DATE',
          date: date
     };
     const state = filtersReducer(undefined, action);
     expect(state.startDate).toBe(
            date
       );
});