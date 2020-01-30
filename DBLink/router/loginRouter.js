const express = require('express');
const router = express.Router();
const User = require('../db/model/userModel');
let date = new Date();


router.post('/', (req, res) => {
    let {us, ps, lastId} = req.body;
    if (!us || !ps) {
        return res.send({err: -1, msg: '参数错误'})
    }


//即登录A账户又登录B账户 A下线
   if(req.body.lastId !=='') {
       User.updateMany({lastId: req.body.lastId}, {isLogin: false}, function (err, res) {
       });
   }

    //lastId使用时间+随机值并确保唯一性
    User.find({lastId}).then((data) => {
        if(data.length>0){
            console.log("loginRouter:lastId值重复");
            writeLastId();
        }else{
            writeLastId();
        }
        function writeLastId() {
           lastId =date.getTime() +''+Math.random();
        }
    });

    //当登录成功时将会更新账号lastId，同时设为登录状态，
    User.find({us, ps}).then(
        (data) => {
            if (data.length > 0) {
                User.updateMany({us:us}, {lastId, isLogin: true}, function (err, res) {
                });
                res.send({err: 0, msg: '登录成功', lastId});
            } else {
                res.send({err: -2, msg: '用户名或密码不正确'})
            }
        })
        .catch((err) => {
            console.log(err);
            return res.send({err: -1, msg: '系统内部错误'})
        })
});
module.exports = router;
