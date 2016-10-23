var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./server/routes');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

routes(app);

app.all('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(PORT, function() {
  console.log('Server is running on ' + PORT);
});