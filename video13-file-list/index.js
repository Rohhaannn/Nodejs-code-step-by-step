const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');
console.log(dirPath);

//creating single file
for (i=0; i<5; i++){
  fs.writeFileSync(dirPath+'/hello'+i+'.txt','a simple hello text file');
}

//creating multiple files inside a folder and display seperately using forEach()
fs.readdir(dirPath, (err, files)=>{
  console.log(files); // will get all files in array
  files.forEach((item)=>{
    console.log('file name is: ', item)
  })
})


/* Interview Question:

Q.  Can we get files from another location ?
=>  No. whenever you run node inside a folder, that acts as a temp web server. whatever files present outside that folder(from which you are running your node file) doesn't matter.

*/