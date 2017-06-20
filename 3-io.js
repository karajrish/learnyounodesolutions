var fs = require('fs');
fs.readFileSync(process.argv[2], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
});
var text = fs.readFileSync(process.argv[2]).toString();
var lines = text.split('\n');
var newlines_count = lines.length - 1;
console.log(newlines_count);
*/