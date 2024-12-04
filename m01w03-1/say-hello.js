const sayHello = (name) => {
  if (name === undefined) {
    return 'hi there';
  }

  return `hello there ${name}`;
};

// export things from this file
module.exports = sayHello;

// module.exports = [sayHello, age];

// module.exports = {
//   sayHello: sayHello,
//   // age: age,
// };
