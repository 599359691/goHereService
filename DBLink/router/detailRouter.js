const express = require('express');
const router = express.Router();
const Detail = require('../db/model/detailModel');

//findOne找一个并返回对象
router.get('/', (req, res) => {
    let detailId=req.query.id;
    Detail.findOne({_id:detailId},{userId: 0}).then((data)=>{
      res.send(data);
    }).catch((err)=>{
        console.log(err)
    })
});

router.post('/',(req , res) => {

});
module.exports = router;
