const mongoose = require('mongoose');
const {Schema} = mongoose;
var authorSchema = new Schema({
    author : String,
    authorname : String
});
const author = mongoose.model('Jay', authorSchema);
// const doc =  author.find({ "author" : "1"});
// console.log(doc);
module.exports =  { author };