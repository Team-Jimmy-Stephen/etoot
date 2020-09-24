const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User', require('../models/user'))
const Appointment = require('../models/appointment')
const router = express.Router()


router.get('/test', async(req, res)=>{
    res.send("test world")
  }) 

  module.exports = router