var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
	var lines = data.split('\n');
	var newlines_count = lines.length - 1;
	console.log(newlines_count);
});