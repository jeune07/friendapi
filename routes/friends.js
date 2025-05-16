const express= require('express');
const router= express.Router();

const friendsController =require('../controllers/friendsController');

router.get('/', friendsController.getAllFriends);
router.get('/:id',friendsController.getAfriend);

module.exports= router;