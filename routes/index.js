// This is the file to create the routes
//! STEP 6: Create the routes for the API

const router = require('express').Router();  // import the Router function from Express
const apiRoutes = require('./api');  // import the API routes from the api directory

router.use('/api', apiRoutes);  // add prefix of `/api` to all of the api routes imported from the `api` directory
router.use((req, res) => {  // if we make a request to any endpoint that doesn't exist, we'll receive a 404 error indicating we have requested an incorrect resource, a good RESTful API practice
    res.status(404).send('<h1>404 Error! Not Found.</h1>');
});

module.exports = router;  // export the router