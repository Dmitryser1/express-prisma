import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';
import { authenticateToken } from '../middleware/users.middleware';
import { authorizeAdmin } from '../middleware/role.middleware';

const router = Router();
const usersController = new UsersController();

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.get('/me', authenticateToken, usersController.me);
router.put('/:id/role', authenticateToken, authorizeAdmin, usersController.updateUserRole);

export default router;
