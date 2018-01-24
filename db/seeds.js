require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('./models/User.js')

const adventurer = new User({name: 'Adventurer', description: 'The hero of this story'})

User
  .remove({})
  .then(() => adventurer.save())
  .then(() => console.log('Successful Save!!!'))
  .then(() => mongoose.connection.close())