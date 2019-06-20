var express = require('express');
var router = express.Router();
var ChatController = require('../controller/ChatController')
/* GET home page. */
router.post('/getMessages', ChatController.get_all_messages);
router.post('/createMessage', ChatController.create_message);

module.exports = router;
