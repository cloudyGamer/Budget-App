 import React from 'react';
 import { connect } from 'react-redux';
 import { Route, Redirect } from 'react-router-dom';
 import Header from '../components/Header';

 
 export const PublicRoute = ({ 
        isAuthenticated, 
        component:Component, 
        ...rest 
   }) => (
   <Route {...rest} xmlns="http://www.w3.org/1999/xhtml" component={(props) => (
          isAuthenticated ? (
               <Component {...props}/>
          ):(
          <div>
           <Header/>
           <Redirect to="/dashboard"/>
          </div>
          )
       
     )}/>
 );
 const mapStateToProps = (state) => ({
      isAuthenticated: !state.auth.uid
 });
 
  export default connect(mapStateToProps)(PublicRoute);