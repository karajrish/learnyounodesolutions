var sum = 0;
for(var i = 2; i<process.argv.length;i++){
	//console.log(process.argv[i]);
	sum+=process.argv[i]-0;
}
console.log(sum);