import moment from 'moment';

const expenses = [{
          id: '1',
          description: 'Gum',
          note:'',
          amount: 195,
          createdAt : 0
},
{
          id: '2',
          description: 'Rent',
          note:'',
          amount: 70200,
          createdAt : moment(0).subtract(4,'days').valueOf()
},
{
          id: '3',
          description: 'Credit Card',
          note:'',
          amount: 109500,
          createdAt : moment(0).add(4,'days').valueOf()
}];
const reducer = (total,num) => {
     return total+num;
     };


 const selectExpensesTotal = (expenses,reducer) => {
          let total = [];
          expenses.map((expense)=>{total.push(expense.amount);});
          return total.reduce(reducer);
          
          };
          

const total = selectExpensesTotal(expenses,reducer);
console.log(total);
