// takes in a function to be run after the specified delay has happened
const myFunc = () => {
  console.log('inside the timeout');
};

const returnVal = setTimeout(myFunc, 2000);

console.log('returnVal', returnVal);
