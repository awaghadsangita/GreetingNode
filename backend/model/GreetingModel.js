const mongoose=require('mongoose');

const messageSchema=mongoose.Schema({
    name:String,
    content:String
},{
    timestamp:true
});
module.exports=mongoose.model('message',messageSchema);