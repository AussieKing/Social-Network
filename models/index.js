//! We need to import the User and Thought models into the index.js file so we can use them as needed.

const User = require('./user');
const Thought = require('./thought');

module.exports = { User, Thought };