const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;
const pathToFile = path.resolve(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(pathToFile)

stdout.write('Hello! Enter the text pls!\n');
stdin.on('data', (chunk) => {
  if (chunk.toString().trim() !== 'exit') {
    writeStream.write(chunk);
  } else {
    exitHandler();
  }
});


function exitHandler() {
  stdout.write('\nBye bye!');
  exit();
}

process.on('SIGINT', exitHandler);




