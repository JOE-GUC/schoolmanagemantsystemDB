const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({

    profile: { 
      type: String,
      required: true 
    },
    studentId: { 
      type: String,
       required: true,
        unique: true 
    },
  enrollDate : {
         type: String,
          required: true 
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


module.exports = mongoose.model('Student', studentSchema);