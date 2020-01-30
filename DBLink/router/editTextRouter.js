const express = require('express');
const router = express.Router();
const Detail = require('../db/model/detailModel');
const User = require('../db/model/userModel');

//发送编辑的输入框原始内容
router.get('/', (req, res) => {
    let detailId = req.query.id;
    let lastId = req.query.userId;
    User.find({lastId, isLogin:true}).then((data) => {
        if (data.length === 1) {
            Detail.findOne({_id: detailId, userId: data[0]._id}, {userId: 0}).then((data) => {
                console.log(data)
                res.send({data});
            }).catch((err) => {
                console.log(err)
            })
        } else {
            res.send({data:{msg:"用户信息不正确"}});
        }

    })
});

module.exports = router;
