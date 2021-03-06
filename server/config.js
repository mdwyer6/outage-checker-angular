var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/outagedb');

module.exports.db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connection established!');
});