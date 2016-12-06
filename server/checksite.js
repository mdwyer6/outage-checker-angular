var http = require('http');
var request = require('request');

module.exports.checkAlive = function(url, callback) {
  request(url, function(err, res, body) {
    if(!err && res.statusCode === 200) {
      callback(null, res);
      return;
    }
    
    callback(err);
  })
}