const mongoose = require('mongoose')

const TaskSchema = mpngoose.Schema({
    todo : String,
    isComplete : Boolean
})

const Task = mongoose.model('task , TaskSchema')
module.exports = Tasks