console.log("codility test");

////<editor-fold defaultstate="collapsed" desc="demo">
//const array = [1,-30,7,2];
//const checkArray = (num) => {return num>3;};
//const newArray = array.filter(checkArray);
//console.log(JSON.stringify(newArray));
//const solution = (A) => {
//     let prevItem = 0;
//     const mapArray = A.map((item) => {
//          if(item>prevItem){
//               console.log("greater item found");
//               prevItem = item;
//          }else{console.log("lesser item found");}
//          });
//     //create array of sequential numbers
//     const intArray = [];
//     for(var i=0;i<prevItem;i++){
//          intArray.push(i);
//     };
//     //loop through array again
//      A.map((item) => {
//           let prevInt = 0;
//           //loop through sequence for numbers
//           intArray.map((int) => {
//                if(int!==item&&int>prevInt){
//                    prevInt = int;
//                };
//           });
//           console.log("highest number is "+prevInt);
//          });
//    
//     
//     console.log(JSON.stringify(intArray));
//     
//};
//solution(array);
//</editor-fold>
////<editor-fold defaultstate="collapsed" desc="apples problem solved">
//const array = [4980,7,100,0,6,6,50];
//const solution = (A) => {
//      const limit = 5000;
//      const sum = A[0];
//      const capacity = limit-sum;
//      A.shift();
//      const sortedArray = A.sort((a,b) => a-b);
//      console.log(JSON.stringify(sortedArray));
//      let appleNumber = 0;
//      let totalWeight = 0;
//      console.log(`capacity is: ${capacity}`);
//      const maxApples = () => {
//           for (var i = 0; i <= sortedArray.length; i++) {
//               totalWeight+=sortedArray[i];
//                console.log(`total weight: ${totalWeight}`);
//               if (totalWeight>=capacity) {
//                     console.log(`capacity exceeded at a total weight of ${totalWeight} for ${i-1} apples`);
//                    return i-1;
//               }
//          }
//          return sortedArray.length-1;
//     };
//      console.log(`max permitted apples ${maxApples()}`);
// };
// solution(array);
//</editor-fold>

// //<editor-fold defaultstate="collapsed" desc="subString Problem -Solved">
//const string = "XXXYYXZ";
//const string = "XXXVVTZZZYZXXXXXXXXX";
//const analyseChunk = (chunkLength) => {
     //      let score=0;
     //      for (var i = 0; i <= chunkLength; i++) {
     //           score = score+ i;
     //      }
     //      return score;
     //      };
     //const solution = (A) => {
     //     const array = A.split("");
     //     //const letter = "X";
     //     let score = 0;
     //     let startingPoint = 0;
     //      for (var i = startingPoint; i <= array.length; i++) {
     //           console.log(`starting point is ${startingPoint}`);
     //           if (array[startingPoint]!==array[i]) {
     //               const chunkLength = i-startingPoint;
     //               score +=analyseChunk(chunkLength);
     //               console.log(`chunk found. Made of ${array[i-1]}'s. Length: ${chunkLength}. Score: ${analyseChunk(chunkLength)}`);
     //               startingPoint = i;
     //               
     //           } 
     //      }
     //      console.log(`final score is ${score}`);
     //};
     //</editor-fold>

//<editor-fold defaultstate="collapsed" desc="student challenge - solved">
//const array = [1,6,3,4,3,5];
//const settleScores = (inputArray) => {
//     console.log(`settle scores called with array ${inputArray}`);
//     const newArray = [inputArray[0]];
//     for (var i = 1; i < inputArray.length; i++) {
//          let gradeChange = 0;
//          if (inputArray[i]<inputArray[i-1]&&inputArray[i]<inputArray[i+1]) {
//               gradeChange = 1;
//          } else if(inputArray[i]>inputArray[i-1]&&inputArray[i]>inputArray[i+1]){
//               gradeChange = - 1; 
//          }
//          newArray.push(inputArray[i]+gradeChange);
//     }
//     //newArray.push(inputArray[inputArray.length]);
//     
//     return newArray;
//};
//const verifyEquality = (inputArray) => {
//     let equalCount = 0;
//     
//     let referenceScore = inputArray[1]; 
//     for (var i = 1; i < inputArray.length; i++) {
//          if (inputArray[i]===referenceScore) {
//               console.log(`match found`);
//               equalCount++;
//          };
//     }
//     if (equalCount===inputArray.length-2) {
//          return true;
//          //return console.log(`equalised. Final array: ${JSON.stringify(inputArray)}`);
//     }else{
//          console.log(`not yet equalised`);
//          return false;
//     }
//};
//const solution = (A) => {
//     let inputArray = A;
//     console.log(`current input array: ${JSON.stringify(inputArray)}`);
//     
//     const finalArray = () => { for (var i = 0; i >=0; i++) {
//               inputArray = settleScores(inputArray);
//               settleScores(inputArray);
//               const equalised = verifyEquality(inputArray);
//               if (equalised===true) {
//                    console.log(`equalised. Closing loop`);
//                    return inputArray;
//               }
//          }};
//     console.log(`final array ${JSON.stringify(finalArray())}`);
//};
//solution(array);
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="hexSpeak challenge solved">

//const string = "12235020";
//const hexValidator = (hexNum) => {
//     const acceptedChars = ["a","b","c","d","e","f","1","0"];
//     const array = hexNum.split("");
//     let successCount = 0;
//     for (var i = 0; i < array.length; i++) {
//          const analysedChar = array[i];
//          for (var j = 0; j < acceptedChars.length; j++) {
//               if (analysedChar===acceptedChars[j]) {
//                    successCount++;
//               } 
//          }
//     }
//     if (successCount===array.length) {
//          return array;
//     }
//     return "ERROR";
//};
//
//const hexConverter = (hexNum) => {
//     for (var i = 0; i < hexNum.length; i++) {
//          if (hexNum[i]==="1") {
//               hexNum[i]="I";
//          }else if(hexNum[i]==="0"){
//               hexNum[i]="O"; 
//          }else{
//               hexNum[i] = hexNum[i].toUpperCase();
//          }
//     }
//     const hexSpeak = hexNum.join("");
//     return hexSpeak;
//}  ;    
////analyseChunk(5);
//const solution = (A) => {
//     const num = parseInt(A);
//     const hexNum = num.toString(16);
//     console.log(hexNum);
//     const validator = hexValidator(hexNum);
//     if (validator!=="ERROR") {
//          return  hexConverter(validator);
//     }
//     
//     return validator;
//};
//
//console.log(solution(string));   
//</editor-fold>

