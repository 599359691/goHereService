const mongoose=require('mongoose');

let hotRecommendListSchema = new mongoose.Schema({
    id : {type:String,required:true},
    imgUrl : {type:String,required:true},
    title: {type:String,required:true},
    desc: {type:String,required:true},
});

let HotRecommendList = mongoose.model('hotRecommendList',hotRecommendListSchema);

module.exports=HotRecommendList;
