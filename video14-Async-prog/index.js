const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

// creating file
fs.writeFileSync(filePath,'this is a simple text file');

// Read File
fs.readFile(filePath,'utf8', (err, item) => {
  console.log(item);
})

// update file
fs.appendFile(filePath, ' and this is apple.txt',(err)=>{
  if(!err) [
    console.log("file is Updated")
  ]
});

// Rename file
fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
  if(!err) {
    console.log("File name is modified");
  }
})

// Delete file
fs.unlinkSync(`${dirPath}/fruit.txt`);



/*interview Question:

what is Buffer ?
A temporary memory location, wheneverwe run any file node require require a bit memory to perform its operations, which is called Buffer.

*/
