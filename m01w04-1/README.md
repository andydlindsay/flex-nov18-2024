# M01W04 - Asynchronous Control Flow

### To Do
* [x] Blocking Code
* [x] Asynchronous Programming
* [x] `setTimeout`
* [x] Returning Values from Async Code
* [x] `setInterval`
* [x] File System Functions (`fs`)

### Async vs Sync
* synchrounous code => the code executes in order from top to bottom, "zero" time to execute
* asynchronous code => runs after the sync code is done (steps out of the way)

```js
const a = 5;
console.log(a);
```

### Blocking code
* long running process that stops other things from happening

### Rules of Async Code
* Async code CANNOT run until ALL the sync code is done
* Async functions DO NOT have return values

### Encoding
* turning characters into numbers for storage on an OS
'a' === 42 (1110001)
'b' === 43










