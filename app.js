import express from 'express';
import bodyParse from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import booksRouters from './routes/books';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyParse.json());
const Books = app.datasource.models.Books;
booksRouters(app, Books);

export default app;
