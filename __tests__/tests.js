const userDetail = require('../models/user')
const mongoose = require('mongoose')
const UserDetails = mongoose.model('userInfo', userDetail, 'userInfo')

test('query database', async () => {
  const tutors = await UserDetails.find().sort({
      createdAt: 'desc'
  })


  expect(tutors).toBe(
})

