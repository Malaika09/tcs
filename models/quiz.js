var mongoose = require('mongoose');
var schema = mongoose.Schema;
var quizSchema = new schema({
    classes: {
        type: [{
            cid: {
                type: mongoose.Types.ObjectId,
                ref: 'Class'
            }
        }]
    },
    number: {
        type: Number,
        required: true,
    },
    questions: {
        type: Array,
        required: true
    }, 
});
module.exports = mongoose.model('Quiz', quizSchema, 'quizzes')