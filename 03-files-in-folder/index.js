const fs = require('fs');
const path = require('path');

const pathTofile = path.resolve(__dirname, 'secret-folder');

fs.readdir(pathTofile, { withFileTypes: true }, function (err, fileNames) {
  if (err) throw err;
  fileNames.forEach((fileName) => {
    if (fileName.isFile()) {
      const index = fileName.name.indexOf('.');
      const nameFile = fileName.name.slice(0, index);
      const extentionFile = fileName.name.slice(index + 1);
      const fullPath = path.resolve(pathTofile, fileName.name);
      fs.stat(fullPath, (err, stats) => {
        if (err) throw err;
        const sizeFile = (stats.size / 1024).toFixed(3);
        console.log(`${nameFile} - ${extentionFile} - ${sizeFile} kb`);
      });
    }
  });
});