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
    if (req.session && req.session.key) {
        userModel.findOne({"user": req.session.key}, function(err,doc){
            if(err || doc === null){
                return res.send('['+JSON.stringify({message: "Erro no banco de dados"})+']');
            }
            
            amigos({_id: {$in: doc.friends}}).then(function(listaAmigos){
                res.render('friends', {title: "Amigos", logado: req.session.key, amigos: listaAmigos});
            });
     });
        
    }
    else{
        res.redirect('/');
    }
}

const amigos = async function (params) { 
    try {  return await userModel.find(params)
    } catch(err) { console.log(err) }
}   

exports.login = function(req, res){
    let user = req.body.user, pass = req.body.pass;

    if(user.length === 0 || pass.length === 0){
        return res.send('[{"message": "Nenhum campo pode estar vazio"}]');
    }

        userModel.findOne({"user": user}, function(err,doc){
            if(err || doc === null){
                return res.send('['+JSON.stringify({message: "Dados incorretos"})+']');
            }
            if(doc.pass === pass){
                req.session.key = user;
                res.send('['+JSON.stringify({message: "Sucesso"})+']')
            }
            else{
                return res.send('['+JSON.stringify({message: "Dados incorretos"})+']');
            }
        });
};

exports.sair = function(req, res){
    req.session.destroy();
    return res.redirect('/');
};

exports.buscar = function(req, res){
    let search = req.query.q;
    userModel.find({user: { $not:  { $regex: req.session.key }, $regex: '.*' + search + '.*',  $options : 'i'}}, function(err,doc){
        if(err || doc === null){
            console.log(err);
            return res.send('['+JSON.stringify({message: "Nenhum usuário encontrado!"})+']');
        }
        console.log(doc);
        res.render('search', {resultados: doc, layout: 'search'} )
    }).limit(10);
};

// Recebo id do usuário para adicionar
exports.addUser = function(req, res){
    let id = req.query.id;
    if (req.session && req.session.key) {

        userModel.findOne({"user": req.session.key}, function(err,doc){
            if(err || doc === null){
                return res.send('['+JSON.stringify({message: "Erro no banco de dados"})+']');
            }
    
            doc.friends.push({_id: id});
      
            doc.save(function(){
                res.send('<p style="color:#fff;">Amigo adicionado com sucesso</p>');
            });
        });
    }
    else{
        res.redirect('/');
    }
}