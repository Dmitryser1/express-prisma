import { Request, Response } from 'express';
import { BookService } from '../services/books.service';

const bookService = new BookService();

export class BooksController {
  async addBook(req: Request, res: Response) {
    try {
      const book = await bookService.addBook(req.body);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAllBooks(req: Request, res: Response) {
    try {
      const books = await bookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getBookById(req: Request, res: Response) {
    try {
      const book = await bookService.getBookById(parseInt(req.params.id));
      if (!book) {
        res.status(404).json({ error: 'Book not found' });
      } else {
        res.json(book);
      }
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateBook(req: Request, res: Response) {
    try {
      const book = await bookService.updateBook(parseInt(req.params.id), req.body);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      await bookService.deleteBook(parseInt(req.params.id));
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
