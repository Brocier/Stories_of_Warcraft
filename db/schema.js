const {Schema} = require('mongoose')

const QuestSchema = new Schema({
  name: {
    type: String,
    required: false,
    default: 'Go get me that scroll'
  },
  description: {
    type: String,
    required: false,
    default: 'Default Description'
  }
}, {timestamps: {}})

const CharacerSchema = new Schema({
  name: {
    type: String,
    required: false,
    default: 'ZugZug'
  },
  description: {
    type: String,
    required: false,
    default: 'Default Description'
  },
  QuestSchema: []
}, {timestamps: {}})

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
  },
  CharacterSchema: []
}, {timestamps: {}})

module.exports = {
  UserSchema,
  CharacterSchema,
  QuestSchema
}