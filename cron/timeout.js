function printHello(){
   console.log( "Hello, World!");
}

// 两秒后执行以上函数
var t= setTimeout(printHello, 2000);
console.log("111111");

var t1= setTimeout(printHello, 2000);
console.log("2222222");

clearTimeout(t1);

clearTimeout(t);


//setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

setInterval(printHello, 1000);
clearInterval(printHello);