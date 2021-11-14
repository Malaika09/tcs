var mongoose = require('mongoose');

var schema = mongoose.Schema;

var materialSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Material', materialSchema);