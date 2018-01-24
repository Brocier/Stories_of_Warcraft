const express = require('express')
const User = require('../db/models/User')
const router = express.Router()

router.get('/', async(req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.post('/', async(req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.delete('/:userId', async(req, res) => {
  try {
    await User.findByIdAndRemove(req.params.userId)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.patch('/:userId', async(req, res) => {
  try {
    const updatedIdea = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
    res.json(updatedIdea)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

module.exports = router