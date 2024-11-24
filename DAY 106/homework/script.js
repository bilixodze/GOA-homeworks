// l
const promise1 = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
  });
  
  promise1.then(message => {
    console.log(message); // Output: "Hello, Promise!"
  });
//_____________________________________________________________________________

// ll
const promise2 = new Promise((resolve, reject) => {
    reject("Something went wrong!");
  });
  
  promise2
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error(error); // Output: "Something went wrong!"
    });
//_____________________________________________________________________________

// lll
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 seconds have passed");
    }, 2000);
  });
  
  promise3.then(message => {
    console.log(message); // Output after 2 seconds: "2 seconds have passed"
  });
//_____________________________________________________________________________

// lV
const promise4 = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  });
  
  promise4
    .then(message => {
      console.log(message); // Output: "Success!" if resolved
    })
    .catch(error => {
      console.error(error); // Output: "Failed!" if rejected
    });
//_____________________________________________________________________________

// V
const promise5 = new Promise((resolve, reject) => {
    resolve(5);
  });
  
  promise5
    .then(number => {
      console.log(number); // Output: 5
      return number * 2;
    })
    .then(number => {
      console.log(number); // Output: 10
      return number * 2;
    })
    .then(number => {
      console.log(number); // Output: 20
      return number * 2;
    })
    .then(number => {
      console.log(number); // Output: 40
    });
//_____________________________________________________________________________

// Vl
const simulateNetworkRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
  
  simulateNetworkRequest.then(message => {
    console.log(message); // Output after 1 second: "Data fetched!"
  });
//_____________________________________________________________________________