import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

interface userId extends Request {
  userId: number;
}

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const user = await authService.register(req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const token = await authService.login(req.body);
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
            const user = await authService.getCurrentUser((req as userId).userId);
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }
}
