
 setTimeout(function(){
            console.log('异步任务1执行完成');
            console.log('随便什么数据1');
        }, 3000);

  setTimeout(function(){
            console.log('异步任务2执行完成');
            console.log('随便什么数据2');
        }, 2000);

   setTimeout(function(){
            console.log('异步任务3执行完成');
            console.log('随便什么数据3');
        }, 1000);

   console.log("end");