// Declare Node modules

// Declare NPM modules
var datetime = require('node-datetime');

// Declare project modules

// ---------------------------------------------------------------------------------------

function log(message) {
  var dt = datetime.create();
  var message = dt.format('H:M') + ": " + message;
  console.log(message);
};


// Private functions
function pad(n) {
    return n<10 ? '0'+n : n;
}



module.exports.log = log;
