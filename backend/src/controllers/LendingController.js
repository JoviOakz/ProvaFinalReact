const { Book } = require('../models/book');
require('dotenv').config();

class LendingController {
    static async getDates(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        try {
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

module.exports = LendingController;