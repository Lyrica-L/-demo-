var express = require('express');
var axios = require('axios');
var app = express();

// 解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 统计总数、总价
app.get('/allGoodsFn',function(req,res){
    var all_goods = JSON.parse(req.query.all_goods);
    var _allNum = 0, _allMoney = 0;
    // console.log( all_goods.goods_0.unit );
    for(var i in all_goods){
        _allNum += all_goods[i].num;
        _allMoney = _allMoney + ( all_goods[i].num * all_goods[i].unitPrice )
    }
    res.send( {
        n: _allNum,
        p: _allMoney
    });
    res.end();
});

// 这是产品数量 * 单价 ，获得某项商品的小计的接口
app.get('/colPrice',function(req,res){
  //console.log( req.query );
  	var colPrice = req.query.n * req.query.p;

  	res.send( {p:colPrice} );
  	res.end();
});

// 获取所有的商品的列表
app.get('/goodsList',function(req, res){

  	// 这些数据，接套路是它再ajax或是怎么着的，
  	// 访问后端给出的api接口，返回json到这里。
  	// 在这里，再通过 .send方法，返回到前端
  	// 因为nodejs是运行在服务端的js

  	var _goodsList = {
          allGoodsNum:15,
          allGoodsMoney:218,
          goodsList:[
             {
              "goodsImgUrl":"https://image3.suning.cn/uimg/cms/img/151548432529049194.png",
              "productInfo":"产品 描述 11 11",
              "unitPrice":11,
              "goodsNum":2,
              "total":22,
              "g_id":"g_id_0",
              "isCheck":true
              }, {
                "goodsImgUrl":"https://image3.suning.cn/uimg/cms/img/151548432529049194.png",
                "productInfo":"产品 描述2 222 22",
                "unitPrice":22,
                "goodsNum":3,
                "total":66,
                "g_id":"g_id_1",
                "isCheck":true
              }, {
                "goodsImgUrl":"https://image3.suning.cn/uimg/cms/img/151548432529049194.png",
                "productInfo":"产品 描述3 333 33 ",
                "unitPrice":13,
                "goodsNum":10,
                "total":130,
                "g_id":"g_id_2",
                "isCheck":true
              }
            ]
        }

    res.send( _goodsList )
    res.end();
});

app.listen(8877,function(){
	console.log('8877，node中间件，已经启动')
})
