import { Request, Response } from "express";
import { UserService } from "../services/users.service";

const userService = new UserService();

interface userId extends Request {
    userId: number;
}

export class UsersController {
    async register(req: Request, res: Response) {
        try {
            const user = await userService.register(req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const token = await userService.login(req.body);
            res.json({ token });
        } catch (error) {
            res.status(401).json({ error: (error as Error).message });
        }
    }

    async me(req: Request, res: Response) {
        try {
            if (!(req as userId).userId) {
                return res
                    .status(401)
                    .json({ error: "User ID not found in request" });
            }
            const user = await userService.getCurrentUser(
                (req as userId).userId
            );
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async updateUserRole(req: Request, res: Response) {
        try {
            const user = await userService.updateUserRole(
                parseInt(req.params.id),
                req.body.role
            );
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }
}
