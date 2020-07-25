 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 
 
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
       <h1>The Info</h1>
       <p>here is the info: {props.info}</p>
  </div>  

  );
const withAdminWarning = (WrappedComponent) => {
     return  (props) => (
       <div>
      {props.isAdmin&&<p>this is private info</p>}
      <WrappedComponent {...props} />
        </div>  
       );
};
const requireAuthentification = (WrappedComponent) => {
     return  (props) => (
       <div>
      {props.isAuthenticated?(<WrappedComponent {...props} />):(
        <p>please log in to view</p>
        )}
      
        </div>  
       );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);
//ReactDOM.render(<AdminInfo xmlns="http://www.w3.org/1999/xhtml" isAdmin={true} info="here are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo xmlns="http://www.w3.org/1999/xhtml" isAuthenticated={false} info="here are the details"/>, document.getElementById('app'));