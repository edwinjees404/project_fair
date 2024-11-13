//imort dotenv
// const dontenv =require('dotenv')
require('dotenv').config()
// Import express
const express = require('express');

// Import cors
const cors = require('cors');

// Create server
const pfServer = express();

// Import router
const router = require('./router');

require('./connection')

// Use CORS
pfServer.use(cors());

// Parse JSON data - middleware
pfServer.use(express.json());

// Use router
pfServer.use(router);


//exporting upload folder
pfServer.use('/upload',express.static('./uploads'))


// Port
const PORT = process.env.PORT || 4000;

// Listen on the port
pfServer.listen(PORT, () => {
    console.log(`Server running successfully at ${PORT}`);
});

// Optional GET request to test working
// pfServer.get('/', (req, res) => {
//     res.send('get request received');
// });

// POST request
// pfServer.post('/', (req, res) => {
//     res.send('post request received');
// });
