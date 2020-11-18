const express = require('express')
// const Course = require('../models/course')
const Appointment = require('../models/appointment')
const router = express.Router()

const connectEnsureLogin = require('connect-ensure-login');

router.get('/', async(req, res)=>{
    console.log(req.query.tutorid)
    if(req.query.tutorid){
        const apps = await Appointment.find({tutorID: req.query.tutorid})
        .then(apps => res.json(apps))
        .catch(err => res.status(400).json('Error: ' + err))
    }
    else{
        const appointments = await Appointment.find().sort({
            createdAt: 'desc'
        })
        .then(appointments => res.json(appointments))
        .catch(err => res.status(400).json('Error: ' + err))
    }
})

router.get('/admin', async (req,res)=>{


    console.log(req.query.tutorid)
    if(req.query.tutorid){
        const apps = await Appointment.find({tutorID: req.query.tutorid})
        .then(apps => res.json(apps))
        .catch(err => res.status(400).json('Error: ' + err))
    }
    else{
        const apps = await Appointment.find().sort({
            createdAt: 'desc'
        })
        .then(apps => res.json(apps))
        .catch(err => res.status(400).json('Error: ' + err))
    }

    //  const appointments = await Appointment.find().sort({
    //     createdAt: 'desc'
    // })

    // res.json(appointments)
    // // res.render('appointment/index', {appointments: appointments})

})

router.get('/schedule', (req,res) => {
    res.render('appointment/new', {appointment: new Appointment()})
})


router.post('/', async (req, res, next) => {
    console.log(req.body)
    const appointment = new Appointment({
        tutorID: req.body.tutorID,
        course: req.body.course,
        meeting: req.body.meetingLink,
        subject: req.body.subject,
        date: req.body.date
    })
    try{
        await appointment.save()
        res.redirect('/')
    }
    catch (e){
        console.log(e)
        res.render(`appointment/new`, { appointment: appointment })
    }
})


router.delete('/:id', async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id)
  res.redirect('/app/admin')
})

  
module.exports = router