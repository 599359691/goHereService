const express = require('express');
const router = express.Router();
const Detail = require('../db/model/detailModel');
const User = require('../db/model/userModel');

router.post('/', (req, res) => {
    console.log(req.body.lastId)
    User.find({lastId: req.body.lastId, isLogin: true}).then((data) => {
        if (data.length > 0) {
            Detail.find({userId: data[0]._id}, {userId: 0, gallaryImgs: 0, desc: 0}).then((data) => {
                res.send(data)
            })
        } else {
            console.log('mineText系统错误')
        }
    })
});


module.exports = router;
