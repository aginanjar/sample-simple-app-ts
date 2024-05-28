import express from 'express';
import authRoutes from './routes/authRoutes';
import profileRoutes from './routes/profileRoutes';
import userRoutes from './routes/userRoutes';
import purchaseRoutes from './routes/purchaseRoutes';
import { errorMiddleware } from './middleware/errorMiddleware';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/purchase', purchaseRoutes);

app.use(errorMiddleware);

export default app;
