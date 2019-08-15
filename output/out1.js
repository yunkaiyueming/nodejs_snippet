console.log("aa","bb");

console.info("aa","bb");

console.error("aa", "bb");

console.warn("aa", "bb");

// console.dir(obj[, options])
// 用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
// 6	console.time(label)
// 输出时间，表示计时开始。
// 7	console.timeEnd(label)
// 结束时间，表示计时结束。
// 8	console.trace(message[, ...])
// 当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。
// 9	console.assert(value[, message][, ...])


console.trace();



console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
// 
console.timeEnd('获取数据');

console.info("程序执行完毕。")