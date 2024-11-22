// console.log(process.argv);

// how to remove the first two elements of an array

// ASI
// process.argv.shift();
// process.argv.shift();

// process.argv.splice(0, 2);
const sliced = process.argv.slice(2);
// const sliced = [ '2', '4', '5', '6', '3.14', '-100' ];

// console.log();
// console.log(sliced);

let runningTotal = 0;

for (const num of sliced) {
  const converted = Number(num); // convert it into a number

  if (Number.isInteger(converted) === true && converted > 0) {
    runningTotal = runningTotal + converted;
    // runningTotal += num;
  }
}

console.log('runningTotal', runningTotal); // 17


// c-style loop
// for (let i = 0; i < sliced.length; i++) {
//   const value = sliced[i];
//   console.log('value', value);
// }

// for..of -> loops through the elements in the array
// for (const value of sliced) {
//   console.log('value', value);
// }

// for..in -> loops through the indexes (indices)
// for (const index in sliced) {
//   console.log(typeof index); // 'string'
//   const value = sliced[index];
//   console.log('value', value);
// }

