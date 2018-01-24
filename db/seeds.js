require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('./models/User.js')

const adventurer = new User({name: 'Adventurer', description: 'The hero of this story'})
const josh = new User({name: 'Brocier', description: 'My first account name'})

User
  .remove({})
  .then(() => adventurer.save())
  .then(() => josh.save())
  .then(() => console.log('Successful Save!!!'))
  .then(() => mongoose.connection.close())