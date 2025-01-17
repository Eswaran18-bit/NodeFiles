console.log("Hello Makkal");
// console.log(global);
const os = require('os');

console.log(os.homedir());
console.log(os.type());
console.log(os.version());

console.log(__dirname);//directry name 
console.log(__filename);//file name
const path = require("path");
console.log("____");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
//most used method
console.log(path.parse(__filename));

/* const math=require("./math");
console.log(math.add(12,10));
console.log(math.sub(12,10));
console.log(math.divi(10,2));
console.log(math.multi(3,6)); */
//method two
const {add,sub,multi,divi}=require("./math");
console.log(add(12,10));
console.log(sub(12,10));
console.log(divi(10,2));
console.log(multi(3,6));