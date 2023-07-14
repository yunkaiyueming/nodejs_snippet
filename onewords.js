// 变量和数据类型
const message = 'Hello, Node.js!'; // 字符串变量
let counter = 0; // 数字变量
const isTrue = true; // 布尔变量

console.log(message);
console.log(counter);
console.log(isTrue);

// 数组
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
console.log('First fruit:', fruits[0]);

// 对象
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
console.log(person);
console.log('Name:', person.name);
console.log('Age:', person['age']);

// 控制流语句（条件语句）
if (counter === 0) {
  console.log('Counter is zero');
} else if (counter > 0) {
  console.log('Counter is positive');
} else {
  console.log('Counter is negative');
}

// 循环语句
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i + 1}`);
}

let i = 0;
while (i < 5) {
  console.log(`While loop iteration ${i + 1}`);
  i++;
}

// 函数和作用域
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

sayHello('Alice');
sayHello('Bob');

function addNumbers(a, b) {
  return a + b;
}

const sum = addNumbers(3, 4);
console.log('Sum:', sum);

// 模块和包的使用
const myModule = require('./myModule');
myModule.sayHello('John');
console.log('Result:', myModule.add(5, 6));

// 异步编程
setTimeout(() => {
  console.log('Async operation completed');
}, 2000);

// Promise 示例
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Some data from an async operation';
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log('Fetched data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// 异步函数（async/await）示例
async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log('Fetched data (async/await):', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchDataAsync();

console.log(message);
console.log(counter);
console.log(isTrue);

// 模块和包的使用
const myModule = require('./myModule');
myModule.sayHello('John');
console.log('Result:', myModule.add(5, 6));


// 内置模块和常用类库
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});

// 更多内置模块和常用类库的使用可以添加在这里
