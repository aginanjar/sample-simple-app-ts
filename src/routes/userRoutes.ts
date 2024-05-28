import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { getDetail } from '../controllers/userController';

const router = express.Router();

router.use(authMiddleware);

router.get('/', getDetail);

export default router;
