const { time } = require('console');
const mongoose = require('mongoose');

const ParsetimeSchema = mongoose.Schema({
    hour:{
        type: String,
        required: true
    },
    minute:{
        type: String,
        required: true
    },
    second:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Parsetime', ParsetimeSchema);