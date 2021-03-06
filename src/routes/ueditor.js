var express = require('express');
var router = express.Router();
var ueditor = require("ueditor");
var path = require("path");

var config = require("../config/config.js");

/* */
router.use('/node/controller', ueditor(path.join(__dirname, '../public'), function(req, res, next) {
    if (req.query.action === 'uploadimage' || req.query.action === 'uploadscrawl') {

        // 这里你可以获得上传图片的信息
        var foo = req.ueditor;
        console.log(foo.filename); // exp.png
        console.log(foo.encoding); // 7bit
        console.log(foo.mimetype); // image/png

        // 下面填写你要把图片保存到的路径 （ 以 path.join(__dirname, 'public') 作为根路径）
        var img_url = '/resource';
        res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    } //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = '/resource';
        res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
    } else {

        res.setHeader('Content-Type', 'application/json');
        res.send(config);
    }

}));

module.exports = router;