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


const fs = require('fs').promises;

async function appendToFile() {
  try {
    // Append a timestamped log entry
    const logEntry = `${new Date().toISOString()}: Application started\n`;
    await fs.appendFile('app.log', logEntry, 'utf8');

    console.log('Log entry added');
  } catch (err) {
    console.error('Error appending to file:', err);
  }
}

appendToFile();