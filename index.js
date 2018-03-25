// server.js

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});
app.set('port', (process.env.PORT || 5000));


// listen for requests :)
var listener = app.listen(app.get('port'), function () {
  console.log('Your app is listening on port ' + app.get('port'));
});
