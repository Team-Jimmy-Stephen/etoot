const express = require('express')
// const Course = require('../models/course')
const Appointment = require('../models/appointment')
const router = express.Router()




router.get('/admin', async (req,res)=>{

     const appointments = await Appointment.find().sort({
        createdAt: 'desc'
    })


    res.render('appointment/index', {appointments: appointments})

})

router.get('/schedule', (req,res) => {
    res.render('appointment/new', {appointment: new Appointment()})
})


router.post('/', async (req, res, next) => {
    console.log(req.body)
    const appointment = new Appointment({
        tutor: req.body.username,
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