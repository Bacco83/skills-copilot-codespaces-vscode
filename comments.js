// Create web server
// 1. Require express
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 4. Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});