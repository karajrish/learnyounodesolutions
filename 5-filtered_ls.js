var fs = require('fs');
fs.readdir(process.argv[2], 'utf8', function (err,files) {
  if (err) {
    return console.log(err);
  }
  var ext = process.argv[3];
  var pat = RegExp('\\.' + ext + '$');
  for(var i=0;i<files.length;i++){
    if(pat.test(files[i])){
      console.log(files[i]);
    }
  }

});