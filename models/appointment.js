const mongoose = require('mongoose')
const User = require('./user')

const appointmentSchema = new mongoose.Schema({
    tutor: {
        type: User,
        required: true
    },
    tutee: {
        type: User,
        required: true
    },
    meeting: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


module.exports = mongoose.model('Appointment', appointmentSchema)