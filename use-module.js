
var lslib = require('./lslib');

var dirname = process.argv[2];
var ext = process.argv[3];

//call function with params dirname, extension and callback
lslib(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});