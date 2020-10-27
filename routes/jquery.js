const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User', require('../models/user'))
const Appointment = require('../models/appointment')
const router = express.Router()


router.get('/test', async(req, res)=>{
  
    res.sendFile('jqtest.html', {root: __dirname})
   
    //res.sendFile('jqtest.html', {root: __dirname })
    //res.sendFile("jqtest.html");
    //res.send("test world")
  }) 

  module.exports = router