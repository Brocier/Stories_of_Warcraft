const mongoose = require('mongoose')
const {QuestSchema} = require('../schema')

const Quest = mongoose.model('Quest', QuestSchema)

module.exports = Quest