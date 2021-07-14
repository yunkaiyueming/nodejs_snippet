const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('做些事情'), 1000)
  })
}

//该函数会返回 promise
// const doSomething = async () => {
//   console.log(await doSomethingAsync())
// }

//该函数会返回 promise
async function doSomething(){
	console.log(await doSomethingAsync())
}

console.log('之前')
doSomething().then(console.log);
console.log('之后')

//Async/await使得用写同步代码方式来支持异步，执行过程还是异步的，但是对于写代码和看代码的程序员来说，方便了写代码，
//避免了会掉地狱 Async/await 使这非常容易，因为对于编译器而言，它就像同步代码一样。