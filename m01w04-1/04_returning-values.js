const higherOrderFunc = (callback) => {
  const user = { name: 'alice' };

  console.log('1. above the timeout');

  const namedFunc = () => {
    console.log('4. inside the timeout');
    user.name = 'bob';
    callback(user);
  }

  setTimeout(namedFunc, 3000);

  console.log('2. below the timeout');
};

// developer A wrote the higher order function
// developer B calls the higher order function

console.log('5. before the main call');

higherOrderFunc((data) => {
  console.log('3. inside the callback');
  console.log('inside our callback', data);
});

console.log('6. after the main call');
// 5 1 2 6 4 3
