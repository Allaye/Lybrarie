import mongoose, { Schema } from 'mongoose';
import IBooks from '../interfaces/book';

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Date, required: true },
    isbn: { type: String, required: true },
    geners: { type: String, required: true }
});

export default mongoose.model<IBooks>('Book', BookSchema);
