const mongoose = require('mongoose');

const UnixtimeSchema = mongoose.Schema({
    unixtime:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Unixtime', UnixtimeSchema);