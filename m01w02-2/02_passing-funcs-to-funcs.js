// callback => a function that we pass to another function to be called by that function
// higher order function (hof) => a function that accepts another function as an argument

const runMyFunction = function(callback) {
  console.log(callback);
  callback('bob'); // console.log('bob');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunction(sayHello);
console.log();
runMyFunction(console.log);
