
//匿名模块对象
module.exports = function() {
    var name; 

    this.setName = function(thyName) { 
        name = thyName;
    }; 

    this.sayHello = function() { 
        console.log('Hello ' + name + ' FROM he3.js');
    };  
}