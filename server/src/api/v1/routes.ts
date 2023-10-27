import { Router } from 'express';
import plantRouter from './features/plants/routes/plants.router';

const router = Router();

router.use('/plants', plantRouter);

export default router;