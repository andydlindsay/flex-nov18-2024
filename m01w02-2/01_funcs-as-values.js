// function declaration (hoisted)
// function myFunc() {
//   console.log('inside the function');
// }

// function expression
const myFunc = function() {
  console.log('inside the function');
};

// functions are objects

// console.log(undefined); // calling the function
// console.log(typeof myFunc); // ????

// console.log(console.log);

// console.log(myFunc);

// myFunc.newKey = 'hello world';

// console.log(myFunc);

// myFunc()
// myFunc.newKey

const funcs = [];

funcs.push(myFunc);
funcs.push(console.log);

console.log(funcs);

// [ [Function: myFunc], [Function: log] ]

// const x = funcs[0]();

const x = myFunc;

// console.log(x);
// x(); // myFunc()

