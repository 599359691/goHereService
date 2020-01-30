const mongoose = require('mongoose');

let detailSchema = new mongoose.Schema({
    sightName: {type: String, required: true},
    bannerImg: {type: String, required: true},
    gallaryImgs: {type: Array, required: true},
    desc: {type: String, required: true},
    userId:{type:String,required:true}
});

let Detail = mongoose.model('detail', detailSchema);

module.exports = Detail;
