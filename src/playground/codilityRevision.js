 console.log('codility revision working');
//how do we sort an array?
//how do we sum an array?
//
//don't forget if you put a return statement in a for loop, nothing after that
//for loop will run


 ////<editor-fold defaultstate="collapsed" desc="problem 1 - unsolved">
 //const A = [5, 3, 7, 7, 10]; 
 //const B = [1, 6, 6, 9, 9];
 // 
 //const solution = (A,B) => {
 //     let stepCount = 0;
 //      for (var i = 0; i < A.length; i++) {
 //           if (A[i]>=A[i+1]&&A[i]<=B[i+1]) {
 //                const swapA = B[i];
 //                B[i]=A[i]+'(s)';
 //                A[i]=swapA+'(s)';
 //                stepCount++;
 //           } else if (B[i]===B[i+1]&&B[i]<A[i+1]) {
 //                const swapA = B[i];
 //                B[i]=A[i]+'(s)';
 //                A[i]=swapA+'(s)';
 //                stepCount++;
 //           }
 //      console.log(stepCount); 
 //      console.log(A); 
 //      console.log(B);
 // }
 //};
 //
 // 
 //
 //solution(A,B);
 //</editor-fold>


 // //<editor-fold defaultstate="collapsed" desc="'apples' - solved">
 //const A = [2500,832,832,832,50];
 // const solution = (A) => {
 //       const capacity = 5000 - A[0];
 //       const sortedArray = A.sort((a,b) => a-b);
 //       let sum = 0;
 //       for (var i = 0; i < A.length; i++) {
 //           sum =+ sortedArray[i];
 //           if (sum>=capacity) {
 //                return i-1;
 //           }
 //      }
 //
 // };
 // 
 // console.log(`max number of apples ${solution(A)}`);
 //</editor-fold>



 //<editor-fold defaultstate="collapsed" desc="3">
 //const solution = (A) => {};
// const S = "35631";
// const converter = (array) => {
//      console.log(`converter recieved array ${array}`);
//      const letArray = ['A','B','C','D','E','F'];
//      const numArray = array;
//      for (var i = 0; i < numArray.length; i++) {
//           let item = numArray[i];
//           if (item===10) {
//                console.log(`10 found`);
//                numArray[i] = 'A';
//           }
//           else if (item>10) {
//                for (var j = 0; j < letArray.length; j++) {
//                     const compNum = 10+j;
//                     if (item===compNum) {
//                          console.log(`matched item:${item} to letter: ${letArray[j]}`);
//                          numArray[i] = letArray[j];
//                     }
//                }
//           } else if (item===0) {
//                numArray[i]='O';
//           } else if (item===1) {
//                numArray[i]==='I';
//           }
//      }
//      return numArray;
//      
// };
// const solution = (S) => {
//      //convert string to numbers
//      const num = Number(S);
//      let quoteInt = num;
//      quoteInt = Math.ceil(quoteInt);
//      //const test = quoteInt/16;
//      //console.log(`${quoteInt} divided by ${16} = ${test}`);
//      const array = [];
//      for (var i = 0; i  <100; i++) {
//           console.log('cycle'+i);
//           //let remainder = quoteInt%16;
//           array[i] = Math.floor(quoteInt%16);
//           quoteInt = quoteInt/16;
//           console.log(`quote int ${Math.ceil(quoteInt)} and remainder ${array[i]}`);
//           //this won't work because it will never reach zero
//           //if (quoteInt<=0) {
//           //round number
//           const rounded = Math.round(quoteInt);
//           if (rounded<=0) {
//                console.log(array);
//                console.log(converter(array));
//                return console.log('done');
//           }
//      }
//      
//      //      let numArray = S.split("");
//      //      for (var i = 0; i < numArray.length; i++) {
//      //           numArray[i] = Number(numArray[i]);
//      //           const convNum = numArray[i]*Math.pow(16, i);
//      //      }
//      
// };
// 
// solution(S);
 //</editor-fold>
 //problem is that the first score is effecting the second, scores need to go into their
 //own array
 // //<editor-fold defaultstate="collapsed" desc="comment">
 //const adjustScores = (A) => {
 //     const length = A.length-1;
 //     let array = [];
 //      for (var i = 1; i < length; i++) {
 //           if (A[i]<A[i+1]&&A[i]<A[i-1]) {
 //                
 //              array[i] =  A[i]+1;
 //           }else if (A[i]<A[i+1]&&A[i]<A[i-1]) {
 //               array[i] =  A[i]-1;
 //           }else{
 //                array[i] =  A[i]; 
 //           };
 //      }
 //      array[0] = A[0];
 //      array[array.length] = A[A.length];
 //      return array;
 // };
 // 
 // let A = [1, 6, 3, 4, 3, 5];
 // const solution = (A) => {
 //      for (var i = 0; i < 10; i++) {
 //           let returnedValue = adjustScores(A);
 //           console.log(`returned value ${returnedValue}`);
 //           A = returnedValue;
 //           if (returnedValue === A) {
 //                return A;
 //           }
 //      }
 // };
 // 
 // console.log(`final array : ${solution(A)}`);
 //</editor-fold>

 //<editor-fold defaultstate="collapsed" desc="string subpieces problem">
// const counter = (A,i) => {
//      console.log(`recieved A: ${A} i: ${i}`);
//      let count = -1;
//      //have step position
//      for (var j = i; j < A.length-i; j++) {
//           count++;
//           console.log(`count at step ${j} is ${count}`);
//           if (A[i]!==A[j+i]) {
//                console.log(`final count ${count}`);
//                //console.log(`divider count ${divider(counter)}`);
//                divider(count);
//           }
//      }
//      //divider(count);
// };
// 
// const divider = (number) => {
//      console.log(`divider ran. recieved ${number}`);
//      const length = number.length;
//      let divideCount = 0;
//      for (var k = 1; k < number; k++) {
//           console.log(`iteration ${k}`);
//           console.log(`${number} divided by ${k} equals ${number/k}`);
//           divideCount =  divideCount + Math.round(number/k); 
//      }
//      console.log(`number of pieces ${divideCount}`);
// };
// 
// let A = "ZZZYYZYZX";
// const solution = (A) => {
//      const array = A.split("");
//      let count = 0;
//      let step = 0;
//      for (var i = 0; i < array.length; i++) {
//           //let counterArray = counter(A,i);
//           count += counter(A,i);
//      }
//      
//      return `final count ${count}`;
// };
// 
// console.log(`solution A ${solution(A)}`);
 //</editor-fold>


 // //<editor-fold defaultstate="collapsed" desc="bucket color- Bromum 2018- solved">
 //const N = 3;
 // const Q = 2;
 // const B = [0,1,0,1,0,1];
 // const C = [1,3,0,0,3,3];
 // const repeatChecker = (buckets, inARow) => {
 //      console.log(`repeat checker ran`);
 //      for (var j = 0; j < buckets.length; j++) {
 //           let bucket = buckets[j];
 //           let count = 0;
 //           for (var i = 0; i < bucket.length; i++) {
 //                let item = bucket[i];
 //                for (var k = 0; k < bucket.length; k++) {
 //                     if (item === bucket[k] && k !== i) {
 //                          count++;
 //                     }
 //                }
 //                if (count === inARow) {
 //                     console.log(`match met`);
 //                     return true;
 //                }
 //           }
 //      }
 //      
 // };
 //const solution = (N,Q,B,C) => {
 //     console.log(`solution ran. N= ${N}`);
 //     //create three arrays
 //      const buckets = [];
 //      for (var i = 0; i < N; i++) {
 //           //console.log(`buckets length ${buckets.length}`);
 //           let array = [];
 //           buckets.push(array);
 //      }
 //      
 //      let count = 0;
 //      //start filling buckets
 //      for (var i = 0; i < B.length; i++) {
 //           let bucket = B[i];
 //           buckets[bucket].push(C[i]);
 //           let match = repeatChecker(buckets,Q);
 //           count++;
 //           if (match===true) {
 //                return count-1;
 //           }else{console.log(`no match this round`);}
 //      }
 //      return -1;
 //};
 //
 //console.log(`condition met at stage ${solution(N,Q,B,C)}`);
 //</editor-fold>

 //<editor-fold defaultstate="collapsed" desc="paths">
 // const A = [2,10,1,3];
 // const B = [10,5,4,5];
 // const C = [2,10,2,1];
 // const D = [25,2,5,1];
 //
 // const array = [A,B,C,D];
 //const solution = (array) => {
 //      console.log('array running');
 //};
 //
 //solution(array);
 //</editor-fold>


//const A = [2,10,1,3];
//const B = [10,5,4,5];
//const solution = () => {
//      console.log('array running');
//};
//
//solution();

 //<editor-fold defaultstate="collapsed" desc="comment">
 // const fetchRequest  = (address,count) => {
 //      const APIAddress = address+count;
 //     return fetch(APIAddress).then(response => response.json())
 //  .then(data => data).catch((error) => {return false});
 // };
 //const solution = () => {
 //      console.log('array running');
 //      //find element with count
 //      const parentElement = getElementsByClassName('comment-list');
 //      parentElement.appendChild('<p>loading...</p>');
 //      //get count
 //      const attribute = parentElement.attr('data-count');
 //      const count = attribute;
 //      const address = "https://www.example.com/comments?count=";
 //      const data = fetchRequest(address,count);
 //      //remove html
 //      //check there are no errors
 //      if (data!==false) {
 //           parentElement.innerHTML = '';
 //           //iterate though object
 //          data.map(({username,message})=>{
 //           //create div
 //           //insert comment
 //           let commentUser = `<div class="comment-item__username">${username}</div>`;
 //           let commentMessage = `<div class="comment-item__${message}">${message}</div>`;
 //           let commentItem = `<div class="comment-item">${commentUser+commentMessage}</div>`;
 //           parentElement.appendChild(commentItem);
 //           // insert commentItem;
 //               
 //          });
 //      }else{
 //           //insert empty tag
 //           parentElement.appendChild('<div class="comment-item"></div>');
 //      };
 //      
 //};
 //
 //solution();

 //</editor-fold>

 ////<editor-fold defaultstate="collapsed" desc="bivalue">
 //const A = [4,5,5,4,5];
 ////const B = [10,5,4,5];
 //const validator = (A, i) => {
 //     console.log('validator ran');
 //      const item = A[i];
 //      let count = 0;
 //      let biCount = 0;
 //      const biArray = [];
 //      for (var j = i + 1; j < A.length-i; j++) {
 //           if (item === A[j]) {
 //                console.log('repeater found');
 //                count++;
 //           } else if (item !== A[j]) {
 //                console.log('bivalue started');
 //                biArray[0] = item;
 //                biArray[1] = A[j];
 //                biCount = lengthCounter(A,j,biArray);
 //                console.log(`l counter returned ${biCount}`);
 //                count = count + biCount;
 //           };
 //      }
 //      if (biCount>0) {
 //           return count;
 //      }else{return 0;}
 // };
 // const lengthCounter = (A,j,biArray) => {
 //      console.log('length counter started');
 //      let biCount = 0;
 //      for (var k = j+1; k < A.length-j; k++) {
 //           if (k===biArray[0]||biArray[1]) {
 //                biCount++;
 //                console.log(`found match- length ${biCount}`);
 //           }else{
 //                console.log('no bivalue matches found');
 //                //return biCount;
 //           }
 //      }
 //      console.log();
 //      return biCount;
 //      
 // };
 //const solution = (A) => {
 //      console.log('array running');
 //     const biCountArray = [];
 //      //find a pair
 //      for (var i = 0; i < A.length; i++) {
 //           const result = validator(A,i);
 //           if (result>0) {
 //                biCountArray.push(result);
 //           }
 //      }
 //      //sort array
 //      if (biCountArray.length===0) {
 //           return 0;
 //      }else{
 //           const sortedArray = biCountArray.sort((a,b) => a-b);
 //           return sortedArray[sortedArray.length];
 //      };
 //};
 //
 // console.log(`maximum length is ${solution(A)}`);
 //</editor-fold>



 //const  N = 2;
 // //<editor-fold defaultstate="collapsed" desc="arrayCreator">
 
  const arrayCreator = (N) => {
        const parentArray = [];
        for (var i = 0; i < N; i++) {
            parentArray[i]= [];         
            const items = parentArray[i];
            for (var j = 0; j < N; j++) {
                 items[j]=Math.floor(Math.random() * Math.floor(10) + 1);
            }
       }
       return parentArray;
  };
 const autoArray = arrayCreator(4);

 //</editor-fold>

 const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
 ];
 const resultArray = [];
 const callMyself = (array) => {
      const N = array.length;
      let NBase = 0;
      let resultArray = [];
      //create limit for max number of possible paths
      let iLimit = [];
      for (var p = 0; p < N; p++) {
           iLimit.push(N-1);
      }
      iLimit = iLimit.join("");
      iLimit = parseInt(iLimit, 10);
      console.log(`iLimit baseN ${iLimit}`);
      iLimit = parseInt(iLimit, N).toString(10);
      iLimit = parseInt(iLimit, 10);
      console.log(`iLimit base10 ${iLimit}`);
      //change the valueof i to match NBase
          //cycle through every possible path     
          for (var i = 0; i < iLimit; i++) {  
               console.log(`-----------------------------`);
               let count = NBase + 1;
               console.log(`i= ${i} starting at NBase+1 = ${count}`);

               //convert to base N
               count = count.toString(N);
               //convert to array
               count = Array.from(count.toString()).map(Number);
               //array to hold final number
               let numArray = [];
               const length = count.length;
               //add zeros
               for (var h = 0; h < N - count.length; h++) {
                    numArray.push(0);
               }
               //add base N number
               for (var j = 0; j < length; j++) {
                    numArray.push(count[j]);
               }
               //implement down and to the left path movement rule
               let productArray = 1;
               for (var k = 0; k < numArray.length; k++) {
                    if (numArray[k] <= numArray[k - 1]) {
                         numArray[k] = numArray[k - 1];
                    }
               }
               //multiply products
               ////correct multiplication - also multiply previous values
               // go through each row
               for (var l = 0; l < numArray.length; l++) {

                    if (l === 0) {
                         for (var n = 0; n <= numArray[0]; n++) {
                              productArray = productArray * array[l][n];
                              //console.log(`multiplying product ${productArray} by ${array[l][n]}`);
                         }
                    } else if (numArray[l] > numArray[l - 1]) {
                         for (var m = numArray[l - 1]; m <= numArray[l]; m++) {
                              //console.log(`multiplying product ${productArray} by ${array[l][m]}`);
                              productArray = productArray * array[l][m];
                         }
                    } else {
                         //console.log(`multiplying product ${productArray} by ${array[l][numArray[l]]}`);
                         productArray = productArray * array[l][numArray[l]];
                    }
               }
               let result = [productArray, numArray];
               resultArray.push(result);
               //get index number
               console.log(`product= ${productArray}`);

               //convert to real num
               //set it to the new number
               let realNum = numArray.join("");
               console.log(`RealNum base${N} = ${realNum}`);
               //convert to number
               realNum = parseInt(realNum, 10);
               //covert from base 3 to base 10
               realNum = parseInt(realNum, N).toString(10);
               realNum = parseInt(realNum, 10);
               //NBase is adding 
               //console.log(`i= ${i} count NBASE= ${NBase}  and count= ${count} RealNum base10 = ${realNum}`);
               NBase = realNum;
               console.log(`-----------------------------`);
          }     
      
      
      //sort result array by first number and you have your answer
      const sortedArray = resultArray.sort((a, b) => a[0] - b[0]);
      //console.log(`sorted array ${sortedArray}`);
      const lowestCost = sortedArray[0][0];
      const bestRoute = sortedArray[0][1];

      console.log(`least costly path is:`);
      for (var i = 0; i < bestRoute.length; i++) {
           console.log(`Row ${i} : to step ${bestRoute[i]}`);
      }

      console.log(`at a cost of ${lowestCost}`);

 };
 //callMyself(array);
 callMyself(autoArray);