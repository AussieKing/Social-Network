// This is the API routes file for the users

const router = require('express').Router();  // import the Router function from Express
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');  // import the functions from the user-controller.js file

//! GET and POST at /api/users
router.route('/').get(getAllUsers).post(createUser);

//! GET, PUT, and DELETE at /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

//! POST and DELETE at /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;  // export the router