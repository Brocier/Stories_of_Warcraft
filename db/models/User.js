const mongoose = require('mongoose')
const {UserSchema} = require('../schema')

const User = mongoose.model('Idea', UserSchema)

module.exports = User