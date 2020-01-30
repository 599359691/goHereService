const express = require('express');
const router = express.Router();
const User = require('../db/model/userModel');

//发送编辑的输入框原始内容
router.post('/', (req) => {
    User.updateMany({lastId:req.body.lastId},{isLogin:false}, function (err, res) {
    });
});

module.exports = router;
