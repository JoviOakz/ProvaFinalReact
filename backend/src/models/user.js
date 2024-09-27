const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        minlength: 6,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    role: {
        type: String,
        enum: ['ADMIN', 'READER'],
        default: 'READER',
        required: true
    },
    phone: {
        type: String,
        length: 11,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: false
    },
    removedAt: {
        type: Date,
        required: false
    }
})

const User = mongoose.model('User', userSchema)

exports.User = User;
exports.userSchema = userSchema;