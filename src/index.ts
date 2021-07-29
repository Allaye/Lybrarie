import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import config from './db/mongoconfig';
import bookRoutes from './routes/book';
import mongoose from 'mongoose';

const SERVER = 'Server';
const router = express();

mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        console.log(SERVER, 'Mongo Connected');
    })
    .catch((error) => {
        console.log(SERVER, error.message, error);
    });


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes go here */
router.use('/api/books', bookRoutes);

/** Error handling */
router.use((req, res) => {
    const error = new Error('NOTHING THERE!');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => {
    console.log(SERVER, `Server is running ${config.server.hostname}:${config.server.port}`)
});
