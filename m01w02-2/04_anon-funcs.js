const runMyFunction = function(callback) {
  console.log(callback);
  callback('carol'); // console.log('bob');
};

const addTwo = function(num) {
  console.log(num + 2);
}

const myNum = 2;
addTwo(myNum)
addTwo(8);

// naming things is hard

// const sayHello = function(name) {
//   console.log(`hello there ${name}`);
// };

// runMyFunction(sayHello);

runMyFunction(function(name) {
  console.log(`hello there ${name}`);
});

// reference it again
