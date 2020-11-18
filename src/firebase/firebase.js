import * as firebase from 'firebase';

const config = {
    apiKey:                process.env.FIREBASE_API_KEY           ,
    authDomain:            process.env.FIREBASE_AUTH_DOMAIN       ,
    databaseURL:           process.env.FIREBASE_DATABASE_URL      ,
    projectId:             process.env.FIREBASE_PROJECT_ID        ,
    storageBucket:         process.env.FIREBASE_STORAGE_BUCKET    ,
    messagingSenderId:     process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId:                 process.env.FIREBASE_APP_ID            
  };
  
  firebase.initializeApp(config);
  const database = firebase.database();
  export {firebase, database as default};
  /************* commands to the database **********/
  //<editor-fold defaultstate="collapsed" desc="databasecalls">
  ////////////////////////////////////////set
//  database.ref().set(
//    {name: 'Grover Cleavland',
//     age: 22,
//     isSingle: false,
//     location: {
//          city: "Baltimore",
//          state: "Maryland"
//     }
//     }
//    ).then(() => {
//         console.log('data saved');
//      }
//        ).catch((e) => {
//      console.log('error detected',e);}); 
//////////////////////////////////////// remove      
//  database.ref('location/city').remove()
//  .then(function() {
//    console.log("Remove succeeded.");
//  })
//  .catch(function(error) {
//    console.log("Remove failed: " + error.message);
//  });

//  database.ref('attributes').set({weight:90,height:6}).then(() => {
//         console.log('data saved');
//      }
//        ).catch(console.log('error'));

//  database.ref('location/city').set('Seattle');
//  database.ref('attributes').set({weight:90,height:6});
//
////////////////////////////////////////update ///////////
//database.ref().update({
//     name: 'woodrow wilson',
//     age: 44,
//     'location/city': 'Washington D.C'
//});
//////////////////////////////////////// read
//database.ref().once('value').then((snapshot) => {
//      const value = snapshot.val();
//      console.log(value);}
//        ).catch((e) => {console.log(e);});
//        
//////////////////////////////////////// subscribe ///////////
// const onValueChange = database.ref().on('value',(snapshot) => {
//      const value = snapshot.val();
//      console.log(value);
//      },(e) => {
//      console.log(e);});
//

// const onValueChange = database.ref().on('value',(snapshot) => {
//      const value = snapshot.val();
//      console.log(`this is ${value.name} he lives in ${value.location.state}`);
//      });
                  
//database.ref().off(onValueChange);


//const snapshot = database.ref().once('value',(snapshot) => {
//      const value  = snapshot.val();
//      console.log(value);
// });

 
//database.ref().once('value')
//  .then((snapshot) => {
//      const value = snapshot.val();
//      console.log('success',value);
// }).catch((e) => {
//      console('error detected',e);});

 //console.log(snapshot,'snapshot');    

// const expenses = 
//      {description:'Rent',
//      note:'includes utilities',
//      amount:50,
//      createdAt: 1232
// };
    
// database.ref('expenses').set('expenses');
// database.ref('expenses').push(
//     expenses
//   );
// database.ref('expenses').push(
//     {description:'Car',
//      note:'includes utilities',
//      amount:50,
//      createdAt: 1232}
//   );
// database.ref('expenses').push(
//     {description:'Plumber',
//      note:'includes utilities',
//      amount:50,
//      createdAt: 1232}
//   );
 //database.ref('expenses').remove();
 
 //////////////////////////////////////// subscribe to expenses
// database.ref('expenses').once('value').then(
//   (snapshot) => {
//      const expenses = [];
//      const val =  snapshot.forEach((snap) => {
//           expenses.push({
//                id:snap.key,
//                ...snap.val()
//           });
//      });
//      console.log(expenses);  
// }
//   );
/////////// watch for child removed, changed ,added
// database.ref().on('child_changed',(childSnap) => {
//      console.log(`change in ${childSnap.key} new value: ${childSnap.val()}`);
// }); 
 //</editor-fold> 
 
 ////////////////////////////////////////test questions 
 //which ones take a .then()?
 /////////// add data to database
 /////////// read data
 /////////// remove data
 /////////// subscribe
 /////////// watch for child removed, changed ,added
/////////// subscribe to an object and read all it's properties
 /////////// add an object to databse
 /////////// read an object from database
 