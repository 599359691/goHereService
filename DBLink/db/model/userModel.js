const mongoose=require('mongoose');

let userSchema = new mongoose.Schema({
    us : {type:String,required:true},
    ps : {type:String,required:true},
    lastId:{type:String,required:true},
    isLogin:{type:Boolean,required:true}
});

let User = mongoose.model('user',userSchema);

module.exports=User;
