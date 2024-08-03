import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';
import { authenticateToken } from '../middleware/auth.middleware';
import { authorizeAdmin } from '../middleware/role.middleware';

const router = Router();
const usersController = new UsersController();

router.put('/:id/role', authenticateToken, authorizeAdmin, usersController.updateUserRole);

export default router;
