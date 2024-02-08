/*
Modules which are imported & use, those are Non-Global Module
Modules which can be used without importing, those are our Global Modules
*/

// console is a global module
console.log('Rohan')

//non-global module
const fs = require('fs')
fs.writeFileSync("Hello.txt","This is Rohan Learning Node on YouTube")
console.log("Hello.txt file created in your current directory")

// in built variables to know directory & filename
console.log("==>>", __dirname);
console.log("==>>", __filename);

//another syntax
const fs2 = require('fs');
fs2.writeFileSync("code.txt", "some code");
console.log("code.txt file created in your current directory")


//another syntax with different variable name
const file = require('fs').writeFileSync;
file("abc.txt", "this is abc name file for testing purpose")
console.log("abc.txt created in current folder")
