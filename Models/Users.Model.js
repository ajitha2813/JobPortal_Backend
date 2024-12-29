const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    saved_jobs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }]
})

module.exports = mongoose.model('User', usersSchema);