const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    category: {
        type: String,
        enum: ['EXCITING', 'ACTION', 'FANTASY', 'HORROR', 'ROMANCE'],
        default: 'EXCITING',
        required: true
    },
    sinopsis: {
        type: String,
        minlength: 6,
        required: true
    },
    storageLocal: {
        type: String,
        minlength: 6,
        required: true
    },
    lent: {
        type: Boolean,
        default: false,
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

const Book = mongoose.model('Book', bookSchema)

exports.Book = Book;
exports.bookSchema = bookSchema;