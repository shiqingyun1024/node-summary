var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lagou-admin',{useNewUrlParser: true,useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// 构建users的model
var usersSchema = mongoose.Schema({
    username: String,
    password: String,
  });

var Users = mongoose.model('users', usersSchema);

module.exports = Users