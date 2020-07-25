 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
 import React from 'react';
  import { Link } from 'react-router-dom';
 //description //createdAt //amount
 //use map - the map goes in expense list. pass the individual items as props
 
 export const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
   <div xmlns="http://www.w3.org/1999/xhtml">
   <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
     <p>{amount} - {createdAt}</p>

   </div>  

   );

export default ExpenseListItem;
