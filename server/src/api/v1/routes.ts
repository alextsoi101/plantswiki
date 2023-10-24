import { Router } from 'express';
import userRouter from './features/user/routes/user.router';

const router = Router();

router.use('/user', userRouter);

export default router;