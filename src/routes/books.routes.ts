import { Router } from 'express';
import { BooksController } from '../controllers/books.controller';
import { authenticateToken } from '../middleware/users.middleware';
import { authorizeAdmin } from '../middleware/role.middleware';

const router = Router();
const booksController = new BooksController();

router.post('/', authenticateToken, authorizeAdmin, booksController.addBook);
router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.put('/:id', authenticateToken, authorizeAdmin, booksController.updateBook);
router.delete('/:id', authenticateToken, authorizeAdmin, booksController.deleteBook);

export default router;
