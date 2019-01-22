// Declare Node modules
const path = require('path');
const os = require('os')
const fs = require('fs');

// Declare NPM modules
const express = require('express');

// Declare project modules


// ..................................................................................................
var app = express();

app.get('/', function (req, res) {
   var message = "CAF BI core service GET:/ responding to client";
   x.log(message);
   res.send('Hello World');
})




// Start listening...
var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port

   message = "CAF BI Core Service started at http://%s:%s", host, port)
   x.log(message);

})
