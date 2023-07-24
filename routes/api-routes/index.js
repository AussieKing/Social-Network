// This is to create the routes for the API

const router = require('express').Router();  // import the Router function from Express
const userRoutes = require('./user-routes');  // import the user routes from the user-routes.js file
const thoughtRoutes = require('./thought-routes');  // import the thought routes from the thought-routes.js file

router.use('/user', userRoutes);  // add prefix of `/users` to all of the user routes imported from the `user-routes.js` file
router.use('/thought', thoughtRoutes);  // add prefix of `/thoughts` to all of the thought routes imported from the `thought-routes.js` file

module.exports = router;  // export the router