const express = require('express');
const router = express.Router();
const User = require('../db/model/userModel');

//前端在访问index首页时会请求查询当前lastId是否有效

router.post('/', (req, res) => {
   console.log(req.body.lastId+'登录检查');
    User.find({lastId:req.body.lastId,isLogin:true})
        .then((data)=>{
            if (!data.length === 1) {
               return res.send({err:-5,msg: '登录已过期'})
            }
        })

});

module.exports = router;
