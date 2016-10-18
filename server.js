var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./server/routes');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

routes(app);

app.all('/*', function(req, res) {
  res.send('\
    <!DOCTYPE html>\
    <html lang="en">\
    <head>\
      <meta charset="UTF-8">\
      <title>Node.js TODO API</title>\
    </head>\
    <body>\
      <p>Hello World!</p>\
    </body>\
    </html>\
  ');
})

app.listen(PORT, function() {
  console.log('Server is running on ' + PORT);
});