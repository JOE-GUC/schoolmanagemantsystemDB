const mongoose = require('mongoose');
const { Schema } = mongoose;

const instructorSchema = new Schema({

    name: { 
      type: String,
      required: true 
    },
    teacherId: { 
      type: String,
       required: true,
        unique: true 
    },
    course: {
         type: String,
          required: true 
        },
    email: {
         type: String, 
         required: true
         },
   
});


module.exports = mongoose.model('Instructor', instructorSchema);