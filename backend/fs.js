// const fs = require('fs');

// // Read file asynchronously with callback
// fs.readFile('myfile.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data);
// });

// // For binary data (like images), omit the encoding
// fs.readFile('image.png', (err, data) => {
//     if (err) throw err;
//     // data is a Buffer containing the file content
//     console.log('Image size:', data.length, 'bytes');
// });
// const { readFile, readFileSync } = require('fs');
// // readFileSync

// // Read file asynchronously with callback
// readFile('myfile.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data);
// });


// Using fs.promises (Node.js 10.0.0+)
const { readFile } = require('fs').promises;

// async function readFileExample() {
//     try {
//         const data = await readFile('myfile.txt', 'utf8');
//         console.log('File content:', data);
//     } catch (err) {
//         console.error('Error reading file:', err);
//     }
// }

// readFileExample();


// console.log("fs.js is running start...");
// readFile('myfile.txt', 'utf8')
//     .then((data) => {
//         console.log('File content:', data);
//     })
//     .catch((err) => {
//         console.error('Error reading file:', err);
//     });
// console.log("fs.js is running end...");


// Or with util.promisify (Node.js 8.0.0+)
// const { promisify } = require('util');
// const readFileAsync = promisify(require('fs').readFile);
// // const writeFileAsync = promisify(require('fs').writeFile);

// async function readWithPromisify() {
//     try {
//         const data = await readFileAsync('myfile.txt', 'utf8');
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     }
// }

// readWithPromisify();

// console.log("fs.js is running start...");
// const fs = require('fs');

// try {
//     // Read file synchronously
//     const data = fs.readFileSync('myfile.txt', 'utf8');
//     console.log('File content:', data);
// } catch (err) {
//     console.error('Error reading file:', err);
// }

// console.log("fs.js is running end...");




// const fs = require('fs').promises;

// async function writeFileExample() {
//     try {
//         // Write text to a file
//         await fs.writeFile('myfile.txt', 'Hello, World!', 'utf8');

//         // Write JSON data
//         const data = { name: 'John', age: 30, city: 'New York', address: { street: '123 Main St', zip: '10001' } };
//         await fs.writeFile('data.json', JSON.stringify(data, null, 4), 'utf8');

//         console.log('Files created successfully');
//     } catch (err) {
//         console.error('Error writing files:', err);
//     }
// }

// writeFileExample();


// const fs = require('fs').promises;

// async function appendToFile() {
//   try {
//     // Append a timestamped log entry
//     const logEntry = `${new Date().toISOString()}: Application started\n`;
//     await fs.appendFile('app.log', logEntry, 'utf8');

//     console.log('Log entry added');
//   } catch (err) {
//     console.error('Error appending to file:', err);
//   }
// }

// appendToFile();


// const fs = require('fs').promises;

// async function deleteFile(filePath) {
//   // const filePath = 'file-to-delete.txt';

//   try {
//     // // Check if file exists before deleting
//     await fs.access(filePath);

//     // Delete the file
//     await fs.unlink(filePath);
//     console.log('File deleted successfully');
//   } catch (err) {
//     console.log(err.code, "err.code")
//     if (err.code === 'ENOENT') {
//       console.log('File does not exist');
//     } else {
//       console.error('Error deleting file:', err);
//     }
//   }
// }

// // deleteFile('script.js');
// deleteFile('testing/test/index.html');



// const fs = require('fs').promises;
// const path = require('path');

// async function deleteFiles(filesToDelete) {
//   // const filesToDelete = [
//   //   'temp1.txt',
//   //   'temp2.txt',
//   //   'temp3.txt'
//   // ];

//   try {
//     // Delete all files in parallel
//     await Promise.all(
//       filesToDelete.map(async file =>
//        await fs.unlink(file).catch(err => {
//           if (err.code !== 'ENOENT') {
//             console.error(`Error deleting ${file}:`, err);
//           }
//         })
//       )
//     );

//     console.log('Files deleted successfully');
//   } catch (err) {
//     console.error('Error during file deletion:', err);
//   }
// }

// deleteFiles([
//   'temp1.txt',
//   'temp2.txt',
//   'temp3.txt'
// ]);
// deleteFiles([
//   'temp1.txt',
//   'temp2.txt',
//   'temp3.txt'
// ]);

// const fs = require('fs').promises;
// const path = require('path');

// async function deleteDirectory(dirPath) {
//   try {
//     // Check if the directory exists
//     const stats = await fs.stat(dirPath);
// console.log(stats, "stats")
//     if (!stats.isDirectory()) {
//       console.log('Path is not a directory');
//       return;
//     }

//     // For Node.js 14.14.0+ (recommended)
//     await fs.rm(dirPath, { recursive: true, force: true });

//     // For older Node.js versions (deprecated but still works)
//     // await fs.rmdir(dirPath, { recursive: true });

//     console.log('Directory deleted successfully');
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log('Directory does not exist');
//     } else {
//       console.error('Error deleting directory:', err);
//     }
//   }
// }

// // Usage
// deleteDirectory('testing/test');





const fs = require('fs').promises;
const path = require('path');

async function emptyDirectory(dirPath) {
  try {
    // Read the directory
    const files = await fs.readdir(dirPath, { withFileTypes: true });
    console.log(files, "files")
    const deletedFilesPromises = files.map(file => {
      const fullPath = path.join(dirPath, file.name);
      return file.isDirectory()
        ? fs.rm(fullPath, { recursive: true, force: true })
        : fs.unlink(fullPath);
    })
    // Delete all files and directories in parallel
    await Promise.all(deletedFilesPromises);

    console.log('Directory emptied successfully');
  } catch (err) {
    console.error('Error emptying directory:', err);
  }
}

// Usage
emptyDirectory('testing');