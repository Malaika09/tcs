var mongoose = require('mongoose');
var schema = mongoose.Schema;
var assignmentSchema = new schema({
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
module.exports = mongoose.model('Assignment', assignmentSchema, 'assignments')