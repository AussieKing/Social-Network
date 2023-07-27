// To setup the code to connect Node to MySQL.
const mongoose = require("mongoose");

// let's connect to the MongoDB database with Mongoose and the MongoDB connection string process.env.MONGODB_URI 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/social-network-api", {  //! unsure if we need :27017 here???
    useNewUrlParser: true,   // setting to true to use the new URL string parser
    useUnifiedTopology: true,  // setting to true to use the new Server Discover and Monitoring engine
});

module.exports = mongoose.connection;