import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.routes';
import booksRoutes from './routes/books.routes';
import usersRoutes from './routes/users.routes';

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/books', booksRoutes);
app.use('/users', usersRoutes);

export default app;
