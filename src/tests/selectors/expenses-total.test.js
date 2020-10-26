import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should add expenses',() => {
   
     const result = selectExpensesTotal(expenses);
     
     expect(result).toBe(179895);
});

test('should add single expense',() => {
   
     const result = selectExpensesTotal([expenses[0]]);
     
     expect(result).toBe(195);
});

test('should no expense',() => {
   
     const result = selectExpensesTotal([]);
     
     expect(result).toBe(0);
});