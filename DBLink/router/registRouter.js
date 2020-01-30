const express = require('express');
const router = express.Router();
const User = require('../db/model/userModel');
var date=new Date();


router.post('/', (req, res) => {
    //获取数据
    let {us, ps} = req.body;
    lastId =date.getTime() +''+Math.random();
    if (us && ps) {
        User.find({us})
            .then((data) => {
                if (data.length === 0) {
                    User.insertMany({us: us, ps: ps, lastId,isLogin:true})
                        .then(() => {
                            res.send({err: 0, msg: '注册成功',lastId})
                        })
                        .catch((err) => {
                            res.send({err: -2, msg: '注册失败',lastId:''})
                            console.log(err)
                        })
                } else {
                    res.send({err: -3, msg: '用户名已存在',lastId:''})
                }
            })

    } else {
        return res.send({err: -1, msg: '参数错误',lastId:''})
    }
    console.log(us, ps);
    //数据处理
    //返回数据
});
module.exports = router;
