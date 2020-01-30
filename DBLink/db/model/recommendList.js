const mongoose=require('mongoose');

let recommendListSchema = new mongoose.Schema({
    id : {type:String,required:true},
    imgUrl : {type:String,required:true},
    title: {type:String,required:true},
    desc: {type:String,required:true}
});

let RecommendList = mongoose.model('RecommendList',recommendListSchema);

module.exports=RecommendList;
