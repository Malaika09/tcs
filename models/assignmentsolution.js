var mongoose = require('mongoose');
var schema = mongoose.Schema;
var assignsolSchema = new schema({
    
    assignid: {
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
module.exports = mongoose.model('Assignsolution', assignsolSchema)