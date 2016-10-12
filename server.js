var jsonfile = require('jsonfile');

var file ="./tmp/data.json";


console.dir(jsonfile.readFileSync(file));
var obj_test = jsonfile.readFileSync(file);
var obj2 = {a : "22"};
	obj_test.page = 22;
var file2 ="./tmp/data2.json";

jsonfile.writeFile(file2, obj_test, function(err) {
	console.error(err);
});