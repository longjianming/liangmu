/**
 * Created by Administrator on 2019/3/13.
 */
/**
 * Created by Administrator on 2019/3/13.
 */
const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');

const app = express();

//设置允许跨域请求
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/api/*',function(req,res) {
    let apiUrl = 'http://129.204.140.140:3500' + req.path.slice(4)
    //console.log(apiUrl)
    request({
        url: apiUrl,//请求路径
        method: "POST",//请求方式，默认为get
        json: true,
        headers: {//设置请求头
             "content-type": "application/json",
        },
        body: req.body//post参数字符串
    }, function(error, response, body) {
        res.send(body)
        console.log(body);
    });

})

// 反向代理
app.listen(4000,function() {
    console.log('go')
});
