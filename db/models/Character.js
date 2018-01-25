const mongoose = require('mongoose')
const {CharacterSchema} = require('../schema')

const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character