//should set up login
import authReducer from '../../reducers/auth';
import uuid from 'uuid';

test('should set up uid login',() => {
     const action = {
          type:'LOGIN',
          uid: '7x234553fd'
     };
     const state = authReducer({},action);
     expect(state).toEqual(
       
       {uid:'7x234553fd'}
       
       );
});

test('should set clear uid for logout',() => {
     const action = {
          type:'LOGOUT'
     };
     const state = authReducer({},action);
     expect(state).toEqual(
       
       {}
       
       );
});
