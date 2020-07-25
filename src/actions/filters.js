 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
 export const sortByDate = () => ({
     type: 'SORT_BY_DATE'
});
export const sortByAmount = () => ({
     type: 'SORT_BY_AMOUNT'
     
});
export const setStartDate = (date={}) => ({
     type: 'SET_START_DATE',
     date
     
});
export const setEndDate = (date={}) => ({
     type: 'SET_END_DATE',
     date
     
});
export const setTextFilter = (text={}) => ({
     type: 'SET_TEXT_FILTER',
     text
     
});
