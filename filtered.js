var path = process.argv[2];
var extension = '.' + process.argv[3];

var fs = require('fs');

function callback(err, list){
    if (err) return console.error(err);
    //do something with data:
    var result = [];
    for (var i=0; i<list.length; i++){
        if (list[i].includes(extension)) {
            result.push(list[i]);
            console.log(list[i])
        }
    }

}

fs.readdir(path, callback);