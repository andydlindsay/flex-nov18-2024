// single responsiblity principle (SRP) a function should only be reponsible for one thing
// inversion of control
// first-class functions => means functions are values

const loopThroughArray = function(arr, callback) {
  // loop through the provided array
  for (const element of arr) { 
    // do something with each element
    // console.log(element);
    callback(element); // namesDoOnEachLoop('bob')
  }
};

const namesDoOnEachLoop = function(name) {
  console.log(`hello there ${name}`);
};
const names = ['alice', 'bob', 'carol']

loopThroughArray(names, namesDoOnEachLoop);

names.forEach(namesDoOnEachLoop);

// console.log();

// const nums = [1, 7, 42, 9];
// const numsDoOnEachLoop = function(num) {
//   console.log(num * 2);
// };

// loopThroughArray(nums, numsDoOnEachLoop);

// arr.forEach
