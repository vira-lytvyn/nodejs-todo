var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, resp) {
  resp.send('\
    <!DOCTYPE html>\
    <html lang="en">\
    <head>\
      <meta charset="UTF-8">\
      <title>Noda.js TODO API</title>\
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