import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check);
router.get('/userinfo/:id', userController.getUser);
router.put('/update', userController.updateUser);
router.post('/newpassword', userController.changePassword);

export default router;