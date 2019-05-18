var express = require('express');
var router = express.Router();
var userModel = require('../model/User');

exports.create_user = function(req, res) {
    //res.write(req.body.user);
    let user = req.body.user, email = req.body.mail, pass = req.body.pass;
    let instanceUser = new userModel({user: user, mail: email, pass: pass});
    var msg;
    instanceUser.save(function(err){
        if(err){
            var erros = '[', i = 0; 
            for(let ind in err.errors){
                if(i>0)
                    erros +=', ';
                erros += JSON.stringify(err.errors[ind]);
                i++;
            }
            erros += ']';
            res.send(erros);
            return console.log(req.body.user);
        }
        res.send('['+JSON.stringify({message: "Cadastrado com sucesso."})+']');
    })
    //userModel.
   // res.send(msg);
};

exports.show_friends = function(req, res){
    res.render('friends');
}

exports.login = function(req, res){
    let user = req.body.user, pass = req.body.pass;
    let userInDB = userModel.findOne({user: user});
    if(userIndDB.pass == pass){
        res.redirect("/friends");
    }
    else{
        res.send(JSON.stringify({message: "Senha errada"}));
    }

};