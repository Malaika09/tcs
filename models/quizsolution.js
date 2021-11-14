var mongoose = require('mongoose');
var schema = mongoose.Schema;
var quizsolSchema = new schema({
    
    quizid: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    studentid: {
        type: mongoose.Types.ObjectId,
        required: true
    }, 
    responses: {
        type: Array,
        required: true
    }
   
});
module.exports = mongoose.model('Quizsol', quizsolSchema, 'quizsol')