// var fs = require('fs'),
// path = require('path');
import fs from 'fs'
import path from 'path'

function walkSync(currentDirPath, callback) {

  // http://nodejs.cn/api/fs.html#fsreaddirsyncpath-options
  // http://nodejs.cn/api/fs.html#class-fsdirent 新增于: v10.10.0
  fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function(dirent) {
    if(dirent.name.indexOf('.exr')>=0){
      console.log(dirent.name)
    }
   // var filePath = path.join(currentDirPath, dirent.name);
 //   if (dirent.isFile()) {
   //   callback(filePath, dirent);
  //  } else if (dirent.isDirectory()) {
  //    walkSync(filePath, callback);
  //  }
  });
}
walkSync('./', function(filePath, stat) {
  //console.log(filePath);
  // src/icons/card_flight.png
  // src/icons/clock.png
  // src/icons/icon-home-edit.png
  // src/icons/iconSprites.json
  // src/index.js
  // do something with "filePath"...
});


