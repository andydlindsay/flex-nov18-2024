const fs = require('fs');

// const fileContents = fs.readFileSync('./index.html', { encoding: 'utf-8' });

// console.log('fileContents', fileContents);

// Node error-first callbacks
// fs.readFile('./index.html', { encoding: 'utf-8' }, (err, fileContents) => {
//   if (err) {
//     // something bad happened
//     return console.log(err);
//   }

//   // happy path!
//   console.log('fileContents', fileContents.length);
// })

// console.log('bottom of the file');

// fs.writeFileSync('doesThisWork.txt', 'hello world');
fs.writeFile('doesThisWorkAsync.txt', 'different string', () => {
  console.log('the file has been created');
});

console.log('bottom of the file');
