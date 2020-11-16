const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User', require('../models/user'))
const Appointment = require('../models/appointment')
const router = express.Router()
const userDetail = require('../models/user')
const passportLocalMongoose = require('passport-local-mongoose');
userDetail.plugin(passportLocalMongoose)
const UserDetails = mongoose.model('userInfo', userDetail, 'userInfo')



router.get('/', async(req, res)=>{

    if(req.query.id){
        const tutor = await UserDetails.findById(req.query.id)
        .then(tutor => res.json(tutor))
        .catch(err => res.status(400).json('Error: ' + err))
    }
    else{
        const tutors = await UserDetails.find()
        .sort({
            createdAt: 'desc'
        })
        .then(tutors => res.json(tutors))
        .catch(err => res.status(400).json('Error: ' + err))
    }
        

    
        
    
})

// router.get('/:id', async(req, res)=>{
//     console.log(req.params)
//     const tutor = await UserDetails.findById(req.params.id)
//     .then(tutor => res.json(tutor))
//     .catch(err => res.status(400).json('Error: ' + err))

// })




module.exports = router