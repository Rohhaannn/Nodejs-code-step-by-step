// console is a global module
console.log('Rohan')

//non-global module
const fs = require ('fs')
// fs.writeFileSync("hello.txt", "this is testing file for non-global module");
console.log("->>",__dirname);
console.log("->>",__filename);


//another syntax

const dt = require('fs').writeFileSync;
dt("abs.txt", "this is another syntax")