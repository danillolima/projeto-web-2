var express = require('express');
var router = express.Router();
var userController = require('../controller/UserController')
var auth = require('../auth');

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/cadastrar', function(req, res, next){
  res.render('cadastrar', {title: "Cadastro"});
});

router.get('/add', userController.addUser);
router.get('/busca',  userController.buscar);
router.post('/friends', auth.withAuth, userController.show_friends);
router.get('/sair', userController.sair);
router.post('/create', userController.create_user);
router.post('/login', userController.login);
router.get('/auth', auth.withAuth, function(req, res){
  res.sendStatus(200);
});
module.exports = router;