var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lagou-admin');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var kittySchema = mongoose.Schema({
    name: String
  });

var Kitten = mongoose.model('Kitten', kittySchema);
var felyne = new Kitten({ name: 'Felyne' });
felyne.save()