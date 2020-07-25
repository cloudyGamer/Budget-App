 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */

import React from 'react'; 
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
export const ExpenseDashboardPage = () => (
  <div xmlns="http://www.w3.org/1999/xhtml">
     <ExpenseListFilters />
     <ExpenseList />
  </div>  

  );

 export default ExpenseDashboardPage;