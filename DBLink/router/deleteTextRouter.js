const express = require('express');
const router = express.Router();
const Detail = require('../db/model/detailModel');
const User = require('../db/model/userModel');
const ObjectID = require('mongodb').ObjectID;

router.post('/', (req, res) => {
    User.find({lastId: req.body.lastId,isLogin:true}).then((data) => {
            if (data.length === 1) {
                Detail.remove({userId: data[0]._id, _id: req.body.detailId}).then((data) => {
                   res.send({msg: '删除成功'})
                })
            } else {
                res.send({msg: '用户信息错误,无法修改'})
            }
        }
    )
});
module.exports = router;
