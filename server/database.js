const mongoose =require('mongoose');
const URI = 'mongodb://localhost/saydydb';

mongoose.connect(URI,{useUnifiedTopology: true ,useNewUrlParser:true})
.then (db => console.log('DB is connected'))
.catch(err =>console.log(err));

module.exports = mongoose;