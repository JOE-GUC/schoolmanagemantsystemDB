const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({

    course: {
        type: String,
        required: true
    },
    instructors: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Course', courseSchema);