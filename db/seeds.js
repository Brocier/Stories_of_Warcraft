require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('./models/User.js')
const Character = require('./models/Character.js')
const Quest = require('./models/Quest.js')

const beth = new User({name: 'SasquatchSocks', description: 'The hero of this story'})
const pegi = new Character({name: "Pegi", description: "The deadliest and cutest dang panda you've ever seen."})
const flowers = new Quest({name: "Kill the nasty man-eating flowers", description: "Sometimes Gardener Frank just needs to slow down."})
pegi
  .quests
  .push(flowers)
beth
  .characters
  .push(pegi)

const josh = new User({name: 'Brocier', description: 'My first account name'})
const rashtael = new Character({name: "Rashtael", description: "Totally BA warrior"})
const mastiva = new Charcter({name: "Mastiva", description: "Druid AF"})
const kobolds = new Quest({name: "Cull the Kobolds", description: "Pesky rats with candles. Kill em' all."})
const dragon = new Quest({name: "Sands of Time", description: "How about we learn how to turn into a dragon?"})

rashtael
  .quests
  .push(kobolds)
mastiva
  .quests
  .push(dragon)
josh
  .characters
  .push(rashtael, mastiva)

User
  .remove({})
  .then(() => beth.save())
  .then(() => josh.save())
  .then(() => console.log('Successful Save!!!'))
  .then(() => mongoose.connection.close())