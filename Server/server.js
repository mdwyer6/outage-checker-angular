var express = require('express');
var helpers = require('./checksite.js')

var app = express();


app.use(express.static(__dirname + '/../client'));

app.post('/send', function(req, res) {
  helpers.checkAlive(req.body.url, function(err, data) {
    if (err) {
      res.send('Site is down');
      return;
    }
    res.send('Site is up');
  })
})

app.get('/back', function(req, res) {
  res.redirect(301, 'http://localhost:8000/')
})

app.get('/*', function(req, res) {
  res.status(404).send();
})

app.listen(8000, function () {
  console.log('Listening on port: 8000');
})
