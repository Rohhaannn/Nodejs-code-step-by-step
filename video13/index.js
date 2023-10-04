const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

console.log(dirPath);

for (i=0; i<5; i++){
  fs.writeFileSync(dirPath+'/hello'+i+'.txt','a simple hello text file');
}

fs.readdir(dirPath, (err, files)=>{
  console.log(files); // will get all files in array
  files.forEach((item)=>{
    console.log('file name is: ', item)
  })
})


/* Interview Question:

can we access files from another drive using node ?
No. we can get only files from folder which inside of that web server bcz for now from which folder we are using node that folder acts as web server. so node doesn't know what happens outside of that server

*/