var x = 1;
function test(){
	this.x = 22;
	console.log(x);
	console.log(this.x);

	console.log(this);
}

test();

