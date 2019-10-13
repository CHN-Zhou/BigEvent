var user={
 login:function(options){
    $.ajax({
        type: 'post',
        url: USER_LOGIN, // url地址是从config.js中获取的，要学会习惯
        // 用户传入的请求参数
        data: options.data,
        // 用户传入的回调函数函数
        success: options.callback
        
      }) 
 }   
}