var express = require('express');
var router = express.Router();
var ueditor = require("ueditor");
var path = require("path");

var config = require("../config/config.js");

/* GET ueditor config. */
router.get('/node/controller', function(req, res, next) {
	console.log(req.params);
	if(req.params.action){
		switch(req.params.action){
			case "uploadimage":
				console.log(req.body);
				break;
		}
		
	}else{
		res.send(config);
	}
  
});

/* */
router.post('/node/controller', ueditor(path.join(__dirname, '../public'), function(req, res, next) {
	if(req.query.action === 'uploadimage'){

    // 这里你可以获得上传图片的信息
    var foo = req.ueditor;
    console.log(foo.filename); // exp.png
    console.log(foo.encoding); // 7bit
    console.log(foo.mimetype); // image/png

    // 下面填写你要把图片保存到的路径 （ 以 path.join(__dirname, 'public') 作为根路径）
    var img_url = '/resource';
    res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
  }
  
}));

module.exports = router;
