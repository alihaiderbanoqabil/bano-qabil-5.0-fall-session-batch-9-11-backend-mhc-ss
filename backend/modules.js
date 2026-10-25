// const os = require('os');

// // Basic system information
// console.log(`OS Platform: ${os.platform()}`);
// console.log(`OS Type: ${os.type()}`);
// console.log(`OS Release: ${os.release()}`);
// console.log(`CPU Architecture: ${os.arch()}`);
// console.log(`Hostname: ${os.hostname()}`);
// // console.log((os.totalmem() / (1024 * 1024 * 1024)).toFixed(2))
// const memoryToGb = (bytes) => (bytes / (1024 * 1024 * 1024)).toFixed(2);
// // Memory information
// // const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
// // const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
// const totalMemGB = memoryToGb(os.totalmem());
// const freeMemGB = memoryToGb(os.freemem());
// console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

// // User information
// const userInfo = os.userInfo();
// console.log(`Current User: ${userInfo.username}`);
// console.log(`Home Directory: ${os.homedir()}`);

// // list down remaining os methods
// console.log('Uptime (seconds):', os.uptime())



// const url = require('url');
// let address = 'http://localhost:8080/default.htm?year=2017&month=february#testing';
// let query = url.parse(address, true);

// console.log("href:", query.href);
// console.log("host:", query.host);
// console.log("pathname:", query.pathname);
// console.log("search:", query.search);
// console.log("protocol:", query.protocol);
// console.log("hash:", query.hash);

// const { URL, URLSearchParams } = require('url');

// const url = new URL('https://example.com/?name=ali&age=30');
// const params = new URLSearchParams(url.search);
// console.log(params, "params");
// console.log("params: ", params.toString())
// console.log("paramsSize: ", params.size)

// // Get a parameter
// console.log(params.get('names'));

// // Add a parameter
// // params.append('city', 'Stavanger');
// // params.append('city', 'Karachi');
// params.set('city', 'Stavanger');
// params.set('city', 'Karachi');

// // Delete a parameter
// params.delete('age');
// // Convert to string
// console.log(params.toString());




// const path = require('path');

// // Get filename from a path
// const filename = path.basename('/users/docs/file.txt');
// console.log(filename);

// // Get filename without extension
// const filenameWithoutExt = path.basename('/users/docs/file.txt', '.txt');
// console.log(filenameWithoutExt);

// // Get the directory name of the current module
// console.log('Directory name:', __dirname);

// // Get the file name of the current module
// console.log('File name:', __filename);


// // Building paths relative to the current module
// const configPath = path.join(__dirname, 'config', 'app-config.json');
// console.log('Config file path:', configPath);


const path = require('path');

const extension = path.extname('file.txt');
console.log(extension);
console.log(`.${'index.html'.split(".")[1]}`);
console.log(`.${'index.my.teting.html'.split(".")['index.my.teting.html'.split(".").length-1]}`);

console.log(path.extname('index.html'));
console.log(path.extname('index.coffee.md'));
console.log(path.extname('index.'));
console.log(path.extname('index'));
console.log(path.extname('.index'));


// Parse a file path
const pathInfo = path.parse('/users/docs/file.txt');
console.log(pathInfo);