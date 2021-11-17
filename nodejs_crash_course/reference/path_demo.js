const path = require('path');

// Base File name
console.log(path.bassename(__filename));

// Dir name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));

