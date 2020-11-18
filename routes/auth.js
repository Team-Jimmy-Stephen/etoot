const express = require('express')
// const UserDetails = require('../models/user')
const router = express.Router()
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userDetail = require('../models/user')
const UserDetails = mongoose.model('userInfo', userDetail, 'userInfo')

router.post('/login', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/login?info=' + info);
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      console.log(user.id)
      return res.redirect("/tutorview/" + user.id); 
    });

  })(req, res, next);
});

router.get('/login',  (req, res) => {
  res.render('auth/login')
}
);

router.get('/admin',  connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
  res.send("logged in")
});



router.get('/user',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({user: req.user})
);

router.get("/register", function (req, res) { 
  res.render("auth/register"); 
}); 

router.post("/register", async(req, res) => { 
    var username = req.body.username 
    var password = req.body.password
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    
 

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt)



    UserDetails.register(new UserDetails({ 
      username: username, 
      password: hashPassword,
      firstname: firstname,
      lastname: lastname
    }), 
            password, function (err, user) { 
        if (err) { 
            console.log(err); 
            return res.render("auth/register"); 
        } 
  
        passport.authenticate("local")( 
            req, res, function () { 
            res.render("auth/secret"); 
        }); 
    }); 
}); 

module.exports = router;