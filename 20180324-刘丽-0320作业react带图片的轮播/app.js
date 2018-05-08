var express = require('express');
var app = new express();

// 设置静态目录
app.use(express.static('demoDev'));

// 监听端口
app.listen(3200,function(){
    console.log('3200,ok')
});