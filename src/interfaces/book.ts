import { Document } from 'mongoose';

export default interface IBooks extends Document {
    title: string;
    author: string;
    year: Date;
    isbn: string;
    geners: string
}
