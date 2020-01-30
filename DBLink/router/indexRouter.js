const express = require('express');
const router = express.Router();
const swiper = require('../db/model/swiperListModel');
const hotRecommend = require('../db/model/hotRecommendList');
const recommend = require('../db/model/recommendList');

let recommendData;
let swiperData;
let hotRecommendData;

hotRecommend.find()
    .then((data)=>{
        hotRecommendData = data
    });
    recommend.find()
        .then((data)=>{
            recommendData = data
        });
    swiper.find()
        .then((data)=>{
            swiperData = data
        });

router.get('/', (req, res) => {
  res.send({res : true , recommend : recommendData ,hotRecommend : hotRecommendData ,swiper : swiperData});
});

module.exports = router;
