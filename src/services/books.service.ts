import { PrismaClient, Book } from '@prisma/client';

const prisma = new PrismaClient();

export class BookService {
  async addBook(data: { title: string, author: string, publicationDate: Date, genres: string[] }): Promise<Book> {
    return await prisma.book.create({
      data: {
        title: data.title,
        author: data.author,
        publicationDate: data.publicationDate,
        genres: data.genres
      }
    });
  }

  async getAllBooks(): Promise<Book[]> {
    return await prisma.book.findMany();
  }

  async getBookById(id: number): Promise<Book | null> {
    return await prisma.book.findUnique({ where: { id } });
  }

  async updateBook(id: number, data: { title?: string, author?: string, publicationDate?: Date, genres?: string[] }): Promise<Book> {
    return await prisma.book.update({
      where: { id },
      data
    });
  }

  async deleteBook(id: number): Promise<void> {
    await prisma.book.delete({ where: { id } });
  }
}
