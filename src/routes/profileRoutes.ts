import express from 'express';
import { getProfile, swipe } from '../controllers/profileController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.use(authMiddleware);

router.get('/get', getProfile);
router.post('/swipe', swipe);

export default router;
