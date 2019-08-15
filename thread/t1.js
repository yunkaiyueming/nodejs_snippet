

console.log(process.execPath);
// 平台信息
console.log(process.platform);

// 输出内存使用情况
console.log(process.memoryUsage());

for(var k in process){
	console.log(k, "======>", process[k]);
}