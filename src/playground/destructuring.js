 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
//object destructuring 
 console.log('destructuring');
const person = {
     name: 'jeff',
     age: 26,
     location: {
          city: 'philly',
          temp: 92
     }
     
};
const book = {
     author: 'ryan',
     name: 'darkness at noon',
     publisher : {
          name: 'penguin'
     }
};
const {name: publisher = 'selfPublished'} = book.publisher;
const {name : firstName = 'anonymous',age} = person;
const {city,temp:temperature} = person.location;
if(city&&temperature){
     console.log(`city is ${city} and temp is ${temperature}`);
}
//console.log(`publisher is ${publisher}`);
//console.log(`my name is ${firstName}`);

//array destructuring
const address = ['1299 south juniper stree','philly','pensylvania','125454'];
const [, metropolis,state = 'NewYork'] = address;
console.log(`city ${metropolis}`);
const item = ['coffee (hot)','1.50','1.75','1.00'];
const [coffee,,medium] = item;
console.log(`a  medium ${coffee} coffee costs ${medium}`);