import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export class UserService {
    async register(data: {
        username: string;
        password: string;
        email: string;
    }): Promise<User> {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return await prisma.user.create({
            data: {
                username: data.username,
                password: hashedPassword,
                email: data.email,
            },
        });
    }

    async login(data: { username: string; password: string }): Promise<string> {
        const user = await prisma.user.findUnique({
            where: { username: data.username },
        });
        if (!user || !(await bcrypt.compare(data.password, user.password))) {
            throw new Error("Invalid username or password");
        }
        return jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET);
    }

    async getCurrentUser(userId: number): Promise<User | null> {
        return await prisma.user.findUnique({ where: { id: userId } });
    }
    async updateUserRole(id: number, role: number): Promise<User> {
        return await prisma.user.update({
            where: { id },
            data: { role },
        });
    }
}
