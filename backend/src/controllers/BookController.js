const { Book } = require('../models/book');
const { User } = require('../models/user');
require('dotenv').config();

class BookController {
    static async register(req, res) {
        const { name, category, sinopsis, storageLocal, lent } = req.body;

        if (!name || !category || !sinopsis || !storageLocal)
            return res.status(400).json({ message: "Missing information." });

        const bookExist = await Book.findOne({ name: name });

        if (bookExist)
            return res.status(409).json({ message: "This book name is already registered." });

        const book = new Book({
            name,
            category,
            sinopsis,
            storageLocal,
            lent,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            removedAt: null,
        });

        try {
            await Book.create(book);
            res.status(201).send({ message: "Created book with sucessfully", data: book });
        } catch (error) {
            return res.status(500).send({ message: "Something failed", data: error.message })
        }
    }

    static async getByTitle(req, res) {
        const { title } = req.query;

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        try {
            let query = { removedAt: null };

            if (title) {
                query = {
                    $or: [
                        { title: new RegExp(title, 'i'), removedAt: null },
                        { userId: { $in: await User.find({ name: new RegExp(title, 'i') }).distinct('_id') } },
                    ]
                };
            }

            const books = await Book.find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .populate('userId', 'name')
                .populate({
                    path: 'comments',
                    match: { removedAt: null },
                    options: { limit: 2 },
                    populate: { path: 'userId', select: 'name' }
                })
                .exec();

            const totalBooks = await Book.countDocuments(query);

            return res.status(200).json({
                currentPage: page,
                totalPages: Math.ceil(totalBooks / limit),
                totalBooks,
                books
            });
        } catch (error) {
            return res.status(500).send({ message: "Failed to search books", data: error.message });
        }
    }
}

module.exports = BookController;