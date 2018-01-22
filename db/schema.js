const {Schema} = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: false,
    default: 'Adventurer'
  },
  description: {
    type: String,
    required: false,
    default: 'Default Description'
  }
}, {timestamps: {}})

module.exports = {
  UserSchema
}