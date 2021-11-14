var mongoose = require('mongoose');
var schema = mongoose.Schema;
var resultSchema = new schema({
    classid: {
        type: mongoose.Types.ObjectId,
        ref: 'Class',
        required: true,
    },
    subjectid: {
        type: String,
    },
    studentid: {
        type: mongoose.Types.ObjectId,
        ref: 'Student',
        required: true
    }, 
    marks: {
        type: Number,
        required: true
    },
    grade:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Result', resultSchema)