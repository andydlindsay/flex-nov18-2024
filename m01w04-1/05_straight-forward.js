// create a function that performs a long-running task
const longRunningFunc = (callback) => {
  // perform the long-running task
  setTimeout(() => {
    // call the provided callback with the result of the task
    callback(42, 'hello', false); // namedFunc(42, 'hello', false)
  }, 3000);
};

// call the HOF and pass in a callback
const namedFunc = (arg1, arg2, arg3) => {
  console.log('inside the callback arg1 is:', arg1);
  console.log('inside the callback arg2 is:', arg2);
  console.log('inside the callback arg3 is:', arg3);
}

longRunningFunc(namedFunc);
