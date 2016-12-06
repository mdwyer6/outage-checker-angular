var db = require('./config.js');

var siteSchema = mongoose.Schema({
  url: String,
  time: Date,
  up: String
});

var site = mongoose.model('Site', siteSchema);

module.exports.createSite = function(url, time, up) {
  var newSite = new site({
    url: url,
    time: time,
    up: up
  });

  newSite.save();
}