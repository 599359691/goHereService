const express = require('express');
const router = express.Router();
const Detail = require('../db/model/detailModel');
const User = require('../db/model/userModel');
const ObjectID = require('mongodb').ObjectID;

router.post('/', (req, res) => {
    //通过lastId查询用户_id
    User.find({lastId: req.body.lastId,isLogin:true}).then((data) => {
            if (data.length === 1) {
                // 查询用户与文章Id匹配的数据
                Detail.find({userId: data[0]._id, _id: req.body.detailId}).then((data) => {
                    if (data.length === 1) {
                        Detail.updateMany({_id: ObjectID(req.body.detailId)}, {desc: req.body.editData}, function (err, res) {
                        });
                        res.send({msg: '修改成功', code: 200})
                    } else {
                        res.send({msg: '用户信息错误,无法修改'})
                    }
                })
            } else {
                res.send({msg: '用户信息错误,无法修改'})
            }
        }
    )
});
router.post('/changeImg', (req, res) => {
    //通过lastId查询用户_id
    console.log(req.body)
    User.find({lastId: req.body.lastId,isLogin:true}).then((data) => {
            if (data.length === 1) {
                // 查询用户与文章Id匹配的数据
                Detail.find({userId: data[0]._id, _id: req.body.detailId}).then((data) => {
                    if (data.length === 1 ) {
                        Detail.updateMany({_id: ObjectID(req.body.detailId)}, {gallaryImgs: req.body.src}, function (err, res) {
                        });
                        res.send({msg: '修改成功', code: 200})
                    } else {
                        res.send({msg: '用户信息错误,无法修改'})
                    }
                })
            } else {
                res.send({msg: '用户信息错误,无法修改'})
            }
        }
    )
});
module.exports = router;
