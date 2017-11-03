var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var IntegerSchema = new Schema({
    currentInteger : {
        type: Number,
        default : 0
    }
});

module.exports = mongoose.model('Integer', IntegerSchema);