//! We need to import the User and Thought models into the index.js file so we can use them as needed.

const User = require('./User');
const Thought = require('./Thought');

module.exports = { User, Thought };