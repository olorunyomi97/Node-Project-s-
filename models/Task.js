const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    // name: String,
    // completed: Boolean,
    // no_of_bitches: String,
    // category_of_bitches : String
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
      },
      completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)