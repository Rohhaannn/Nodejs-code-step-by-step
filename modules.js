// console is a global module
console.log('Rohan')

//non-global module
const fs = require ('fs')
fs.writeFileSync("hello.txt", "this is testing file for non-global module");