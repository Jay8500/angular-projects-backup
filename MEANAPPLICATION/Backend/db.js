const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jay', { useNewUrlParser : true, useUnifiedTopology : true, useFindAndModify : true},
 (err)=>{
       if(!err)
       console.log('Mongodb connection succeeded...');

       else
          console.log('Error in Db connection :' + JSON.stringify(err, undefined, 2));
 });

module.exports = mongoose;