const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    subjects: {
        type: [String],
        // required: true
    },
    tutor: {
        type: Boolean,
        required: true,
        default: false
    },
    admin: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


// module.exports = mongoose.model('User', userSchema)
module.exports = userSchema