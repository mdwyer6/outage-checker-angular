var http = require('http');

module.exports.checkAlive = function(url, callback) {
  http.get(url, (data) => {
    if (data.statusCode !== 200) {
      callback(err);
      return;
    }

    callback(null, data);
  })
}