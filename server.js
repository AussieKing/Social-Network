// Usual file to create the routes
//! STEP 1: Create the routes
const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//! STEP 2: Add middleware
app.use(express.urlencoded({ extended: true })); // parse incoming JSON data, set to true so we can use nested data
app.use(express.json()); // parse incoming JSON data

//! STEP 3: Add routes
app.use(routes); // use the routes

//! STEP 4: Connect to the database and server
db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
    });

