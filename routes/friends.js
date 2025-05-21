const express = require('express');
const router = express.Router();

const friendsController = require('../controllers/friendsController');

router.get('/', friendsController.getAllFriends);
router.get('/:id', friendsController.getAfriend);
router.post('/create-friend', friendsController.createFriend);
router.put('/:id', friendsController.updateFriend);
router.delete('/:id', friendsController.deleteFriend)

module.exports = router;
