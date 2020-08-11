const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const JWT_KEY = 'json_web_token_secret';

router.post('/user' , (req, res)=>{
    if(req.isAuth){
        User.find({_id: req.body.userId})
        .then((response)=>res.send(response));
    }else{
        res.send('Auth Failed')
    }
})

router.post('/register',(req, res)=>{
    User.find({email:req.body.email})
    .then((user)=>{
        if(user.length >=1){
            //console.log('User Already exist')
            res.send({
                message : 'User Already exist. Try something new',
                status: 302
            })
        }else{
            bcrypt.hash(req.body.password, 10,(err,hash)=>{
                if(err){
                    res.send('Server Error')
                }else{
                    var username = req.body.username;
                    var email = req.body.email;
                    var password = hash;
                    var user = new User ({username, email, password});
                    user.save()
                    .then((response)=>{
                        //console.log(response)
                        res.send({
                            message : 'User Created',
                            status:201
                        })
                    })
                }
            })
            
        }
    })
    .catch((err)=>{
        res.status(500).json({err:'error'})
    })
    
});

router.post('/login',(req, res)=>{
    User.find({ email : req.body.email })
    .then((user)=>{
        if(user.length < 1){
              res.send({
                error : 'Email or Password is wrong',
                status: 401
            })
        }
        bcrypt.compare(req.body.password , user[0].password , (err ,result)=>{
            if(!result){
                //console.log('Auth Error');
                  res.send({
                    error: 'Email or Password is wrong',
                    status :401
                });
            }
            if(result){
                const token = jwt.sign({
                    email : user[0].email,
                    _id : user[0]._id
                },JWT_KEY ,{
                    expiresIn  : '1d'
                });
                return res.status(200).json({
                    token : token,
                    userId : user[0]._id,
                    status: 200
                }) 
            }
        })
    })
    .catch(error=>{
        res.status(500).json({
            error : error
        })
    })
})


module.exports = router;