const ourMap = function(arr, callback) {
  // create a new output array
  const output = [];

  // loop over the provided array
  for (const element of arr) {
    // call the provided callback AND capture the return value
    const returnVal = callback(element);

    // push the return value into our output array
    output.push(returnVal);
  }
    
  // return the new array
  return output;
};

const nums = [1,2,3];
const numsCallback = function(num) {
  return num * 2;
};
// [2, 4, 6]

const ourMappedNums = ourMap(nums, numsCallback);

console.log(nums);
console.log(ourMappedNums);
console.log();

const names = ['alice', 'bob', 'carol'];
const namesCallback = function(name) {
  return `you are signed in as ${name}`;
};

const ourMappedNames = ourMap(names, namesCallback);
console.log(names);
console.log(ourMappedNames);

const builtInMapArray = names.map(namesCallback)
console.log(builtInMapArray);
