// console.log(process.argv)
// console.log(process.argv[2]);

const fs = require('fs')

const input = process.argv;
fs.writeFileSync(input[2], input[3]); //| node index.js apple.txt 'this apple is fruit not phone' | run this comnnd - file gets created with given text


if(input[2]=='add') {
  fs.writeFileSync(input[3], input[4])
} else if(input[2]=='remove') {
  fs.unlinkSync(input[3])
} else {
  console.log("Invaid Input")
}

//this block of code code will add & remove file you give while giving the command for e.g: node index.js add text.txt 'this is a simple text'