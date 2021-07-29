import express from 'express';
import controller from '../controllers/book';

const router = express.Router();

router.post('/create/book', controller.addBook);
router.get('/get/books', controller.getAllBooks);
router.get('/get/books', controller.getBooksByAuthor);
router.get('/get/books', controller.getBooksByGeners);
router.get('/get/books', controller.getBooksByTitle);


export = router;
