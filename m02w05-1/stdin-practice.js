// stdout => default app output (terminal)
// stdin => default app input (terminal)

// process.stdout.write('hello world')

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  console.log('you typed:', data);
});
