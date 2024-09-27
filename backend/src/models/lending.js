const mongoose = require('mongoose');
const { userSchema } = require('./user');
const { bookSchema } = require('./book');

const lendingSchema = new mongoose.Schema({
    userId: {
        type: userSchema,
        required: true
    },
    bookId: {
        type: bookSchema,
        required: true
    },
    lentDate: {
        type: Date,
        required: true
    },
    prevReturnDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
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

const Lending = mongoose.model('Lending', lendingSchema)

exports.Lending = Lending;
exports.lendingSchema = lendingSchema;