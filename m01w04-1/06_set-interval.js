let i = 10;

const interval = setInterval(() => {
  i -= 1;
  console.log('hello', i);

  if (i === 0) {
    clearInterval(interval);
  }
}, 100);
