//
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name + ' FROM he2.js'); 
    }; 
}; 

module.exports = Hello;