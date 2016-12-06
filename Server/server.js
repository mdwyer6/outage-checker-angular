var express = require('express');
var helpers = require('./checksite.js');
var bodyparser = require('body-parser');

var app = express();


app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());
app.use(express.static(__dirname + '/../client'));

app.post('/send', function(req, res) {
  console.log(req.body.url);
  helpers.checkAlive(req.body.url, function(err, data) {
    console.log('reached');
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
