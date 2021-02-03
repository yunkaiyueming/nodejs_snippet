
//使用函数的模式，通过this构造对象 this变量会绑定在实例对象上
function Cat(id,name){
	this.id=id;
	this.name=name;

	this.play = function(){
		console.log(this.id,this.name," is playing");
	}

	this.eat = function(){
		console.log("吃老鼠");
	};

	//我们可以把那些不变的属性和方法，直接定义在prototype对象上。	
	Cat.prototype.type = "猫科动物";
	Cat.prototype.eat = function(){alert("吃老鼠")};

}



　var cat1 = new Cat("大毛","黄色");

　　var cat2 = new Cat("二毛","黑色");

　　alert(cat1.type); // 猫科动物
　　cat1.eat(); // 吃老鼠

alert(cat1.eat == cat2.eat); //true