const express = require('express');
const router = express.Router();
const Detail = require('../db/model/detailModel');


router.post('/', (req,res) => {
   let data=req.body.data;
   Detail.find({sightName:{$regex:data}}).then((data)=>{
       res.send({data})
   });
});

module.exports = router;
