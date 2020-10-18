
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
 //description //createdAt //amount
 //use map - the map goes in expense list. pass the individual items as props
// load a locale
numeral.register('locale', 'irl', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'st' : 'th';
    },
    currency: {
        symbol: '€'
    }
});

// switch between locales
numeral.locale('irl');
export const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
  <div xmlns="http://www.w3.org/1999/xhtml">
  <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>
    {numeral(amount/100).format('$0,0.00')} 
    - 
    {moment(createdAt).format('MMMM Do, YYYY')}</p>

  </div>  

  );

export default ExpenseListItem;
