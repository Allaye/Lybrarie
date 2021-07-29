import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Book from '../models/book';

const addBook = (req: Request, res: Response) => {
    let { author, title, year, isbn, geners } = req.body;

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        author,
        title,
        year,
        isbn,
        geners
    });

    return book
        .save()
        .then((result) => {
            return res.status(201).json({
                book: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllBooks = (req: Request, res: Response) => {
    Book.find()
        .exec()
        .then((books) => {
            return res.status(200).json({
                books: books,
                count: books.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getBooksByAuthor = (req: Request, res: Response) => {
    Book.find({ author: req.params.author })
        .exec()
        .then((books) => {
            return res.status(200).json({
                books: books,
                count: books.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getBooksByGeners = (req: Request, res: Response) => {
    Book.find({ geners: req.params.geners })
        .exec()
        .then((books) => {
            return res.status(200).json({
                books: books,
                count: books.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getBooksByTitle = (req: Request, res: Response) => {
    Book.find({ title: req.params.title })
        .exec()
        .then((books) => {
            return res.status(200).json({
                books: books
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};


export default { addBook, getAllBooks, getBooksByAuthor, getBooksByGeners, getBooksByTitle };
