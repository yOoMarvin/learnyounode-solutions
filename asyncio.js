var fs = require('fs')
var number = undefined;

function finishedReading(error, fileData) {
  if (error) return console.error(error)
  // do something with the fileData
    var str = fileData.toString();
    var arr = str.split("\n");

    console.log(arr.length-1);
}

fs.readFile(process.argv[2], finishedReading);
