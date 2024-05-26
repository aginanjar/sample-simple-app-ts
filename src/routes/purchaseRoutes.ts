import express from 'express';
import { purchase } from '../controllers/purchaseController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/', purchase);

export default router;
