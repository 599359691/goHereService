const mongoose=require('mongoose');

let swiperListSchema = new mongoose.Schema({
    id : {type:String,required:true},
    imgUrl : {type:String,required:true},
});

let swiperList = mongoose.model('swiperList',swiperListSchema);

module.exports=swiperList;
