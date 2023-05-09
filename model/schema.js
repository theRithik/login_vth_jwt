const mongoose = require('mongoose')

const Schema = mongoose.Schema

const client = new Schema({
    name:{type:String},
    number:{type:String},
    describtion:{type:String} 
})
mongoose.model('users',client)
module.exports = mongoose.model('users')
