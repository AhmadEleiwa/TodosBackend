const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todo = Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    status:{type:Boolean, required:true},
})




module.exports = mongoose.model('todo', todo)