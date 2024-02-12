const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/apple.txt`;

// creating file
fs.writeFileSync(filePath, 'this is apple.txt');

// Read File
fs.readFile(filePath, (err, item)=>{
  console.log(item);
})

// Update file
fs.appendFile(filePath,' and this is a simple text file', (err)=>{
  if(!err) console.log('file is updated')
})

// Rename file
fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
  if(!err){
    console.log('file name is updated');
  }
})


// Delete file
fs.unlinkSync(`${dirPath}/fruit.txt`);


/*interview Question:

what is Buffer ?
A temporary memory location, wheneverwe run any file node require require a bit memory to perform its operations, which is called Buffer.

*/