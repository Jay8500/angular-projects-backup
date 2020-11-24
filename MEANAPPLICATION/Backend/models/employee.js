const mongoose = require('mongoose');

var Employees = mongoose.model('jays', {
    titles: { type: String }
    // title: { type: String },
    // position: { type: String },
    // password: { type: String },
});

module.exports =
    { Employees: Employees };