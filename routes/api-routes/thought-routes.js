// This is the API routes file for the thoughts

const router = require('express').Router();  // import the Router function from Express
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');  // import the functions from the thought-controller.js file

//! GET and POST at /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

//! GET, PUT, and DELETE at /api/thoughts/:id
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

//! POST and DELETE at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;  // export the router