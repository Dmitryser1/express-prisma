import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
  async updateUserRole(id: number, role: number): Promise<User> {
    return await prisma.user.update({
      where: { id },
      data: { role }
    });
  }
}
