const express = require('express');
const chatControllers = require('../controllers/chatController');

const router = express.Router()


router.route('/').get(chatControllers.getAllChats).post()

// router.route('/:chatId').get().post().delete().update()

module.exports = router