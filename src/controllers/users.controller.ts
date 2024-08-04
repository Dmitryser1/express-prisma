import { Request, Response } from 'express';
import { UserService } from '../services/users.service';

const userService = new UserService();

export class UsersController {
  async updateUserRole(req: Request, res: Response) {
    try {
      const user = await userService.updateUserRole(parseInt(req.params.id), req.body.role);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
