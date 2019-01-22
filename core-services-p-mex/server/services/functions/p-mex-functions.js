// Declare Node modules

// Declare NPM modules
// const datetime = require('node-datetime');
const hash = require('js-hash-code');

// Declare project modules



function getPmexFile(pMexFileId) {
  message = "Retrieve file " + pMexFileId + " from cache";
  log(message);

  // Get the file from cache

  message = "File retrieved " + pMexFileId + " from cache";
  log(message);


};

function makePmexFileName() {
  message = "Make file name for the json object";
  log(message);

  var datetime = require('node-datetime');
  var dt = datetime.create();
  var formattedDate= dt.format('Y-m-d_H:M');

  var obj = [1,2,3];
  var fileID = hash(obj+formattedDate);

  var makePmexFileName = formattedDate + "_" + fileID;
  var message = "File name " + makePmexFileName + " has been constructed"
  log(message);
  return  makePmexFileName
};


// Private functions
function pad(n) {
    return n<10 ? '0'+n : n;
}



module.exports.getPmexFile = getPmexFile;
module.exports.makePmexFileName = makePmexFileName;
