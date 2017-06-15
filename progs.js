/* Problem 1
console.log("HELLO WORLD")
*/

/* Problem 2
var sum = 0;
for(var i = 2; i<process.argv.length;i++){
	//console.log(process.argv[i]);
	sum+=process.argv[i]-0;
}
console.log(sum);
*/

/* Problem 3
var fs = require('fs');
fs.readFileSync(process.argv[2], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
});
var text = fs.readFileSync(process.argv[2]).toString();
var lines = text.split('\n');
var newlines_count = lines.length - 1;
console.log(newlines_count);
*/

/*
var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
	var lines = data.split('\n');
	var newlines_count = lines.length - 1;
	console.log(newlines_count);
});
*/
var fs = require('fs');
fs.readdir(process.argv[2], 'utf8', function (err,list) {
  if (err) {
    return console.log(err);
  }
	console.log(list);
	//console.log(list.type);
});

