const mongoose = require('mongoose');
const { Schema } = mongoose;
var addressSchema = mongoose.Schema({

})
var usersSchema = new Schema({

        // username: { type: String },
        // email: { type: String },
        // gender: { type: String },
        // password: { type: String },
        // hashedpassword: { type: String },


        name: { type: String },
        middlename: { type: String },
        surname: { type: String },
        loginname: { type: String },
        nationality: { type: String },
        state: { type: String },
        password: { type: String },
        conformpassword: { type: String },
        gender: { type: String },
        homecontact: { type: String },
        personalcontact: { type: String },
        states: { type: String },
        district: { type: String },
        landmark: { type: String },
        pincode: { type: String },
        createDate: { type: Date, default: Date.now },
        sessionBy: { type: Date, default: Date.now }
});

const usersFor = mongoose.model('Plugger', usersSchema);
module.exports = { usersFor };