 const promise = new Promise((resolve,reject) => {
      setTimeout(() => {
           resolve('simple string');
           reject('we had an issue buko');
      },1000);
 });
 
promise.then((data) => {
      console.log(data);
 }).catch((error) => {
      console.log(error);
 });