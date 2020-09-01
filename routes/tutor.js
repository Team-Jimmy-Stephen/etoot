const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User', require('../models/user'))
const Appointment = require('../models/appointment')
const router = express.Router()



router.get('/', async(req, res)=>{
    res.send("tutor route")
})


module.exports = router