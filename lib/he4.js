function a(){
	console.log("aa")
}

function b(){
	console.log("bb")
}

function c(){
	console.log("cc")
}

var usefuc = {
	a:a,
	b:b,
	c:c
}

//调用方式 h4.a() h4.b() h4.c()
// module.exports.a = a;
// module.exports.b = b;
// module.exports.c = c;

//调用方式 h4.a() h4.b() h4.c()
module.exports = usefuc; 

//调用方式 h4.usefuc.a();  h4.usefuc.b();
//module.exports.usefuc = usefuc; 