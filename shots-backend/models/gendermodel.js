const mongoose = require('mongoose');
const { Schema } = mongoose;
var genderSchema = new Schema({
    genderId : { type : String},
    genderOptions : {type : String}
});

const genderList = mongoose.model('Gender', genderSchema);
module.exports = { genderList };