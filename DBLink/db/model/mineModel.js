const mongoose=require('mongoose');

let mineSchema = new mongoose.Schema({

});

let Mine = mongoose.model('mine',mineSchema);

module.exports=Mine;
