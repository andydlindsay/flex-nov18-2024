// introduced in 2015 (ES6)
// advantages of arrow functions
// 1. no more function keyword! yay!!!!
// 2. if only one argument, you can remove the parens (optional)
// 3. if only one line of code, no need for curly braces (optional)
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow functions DO NOT create the variable `this`

// implicit => don't ask for them to happen (happen on their own)
// explicit => we ask for it to happen


const sayHello1 = function(name) {
  return `hello there ${name}`;
};

const sayHello2 = name => `hello there ${name}`;

// hof(function(name) {
//   return `hello there ${name}`;
// })

// hof(name => `hello there ${name}`)

const returnVal = sayHello2('carol');
console.log('returnVal', returnVal);


