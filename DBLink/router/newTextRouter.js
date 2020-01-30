const express = require('express');
const router = express.Router();
const User = require('../db/model/userModel');
const Detail = require('../db/model/detailModel');

//提交内容时会请求查询当前lastId是否有效
router.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.body.lastId+'新增内容检查');
    User.find({lastId:req.body.lastId,isLogin:true})
        .then((data)=>{
            if (!data.length === 1 ) {
                return res.send({err:-6,msg: '用户信息不正确，添加文章失败'})
            }else{
            return data[0]._id
            }
        }
        ).then((data)=>{
            console.log(data);
           Detail.insertMany({sightName:req.body.sightName,desc:req.body.desc,gallaryImgs:req.body.src,userId:data,bannerImg:req.body.src[0],comment:0});
            res.send({msg:'成功增加一篇文章'})
    })

});

module.exports = router;
