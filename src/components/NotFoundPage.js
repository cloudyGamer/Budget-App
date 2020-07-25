 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 import React from 'react'; 
 import {Link} from 'react-router-dom';
 export const NotFoundPage = () => (
  <div>
  404 Not Found <Link to="/">Go Home</Link>
  </div>  
  );

 export default NotFoundPage;