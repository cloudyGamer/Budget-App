import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLogin, login, logout
    } from '../../actions/auth';
 //import expenses from '../../actions/expenses';
 import { database,googleAuthProvider } from '../../firebase/firebase';
 const createMockStore = configureStore([thunk]);
 
// test('should set up start login in firebase', (done) => {
//     //call via id and see do you get null back 
//     const store = createMockStore({});
//     database.auth().signInWithPopup(googleAuthProvider).then(
//        (snapshot) => {
//               expect(snapshot.val()).toBeFalsy();
//                done();
//           });  
// });
 
test('Set up login',() => {
     const action = login('123');
     expect(action).toEqual(
       {
            type: 'LOGIN',
            uid: '123'
       }
       );
});

test('Set up logout',() => {
     const action = logout();
     expect(action).toEqual(
       {
            type: 'LOGOUT'
       }
       );
});