// timeout_vs_immediate.js
// setTimeout(() => {
//   console.log('timeout');
// }, 10);

// setImmediate(() => {
//   console.log('immediate');
// });




// timeout_vs_immediate.js 
//两个函数放入一个 I/O 循环内调用，setImmediate 总是被优先调用
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);

  setImmediate(() => {
    console.log('immediate');
  });
});