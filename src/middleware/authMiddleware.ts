import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface RequestWithUser extends Request {
  user: any; // Add 'user' property to Request interface
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as RequestWithUser).user = decoded; // Add type assertion to access 'user' property
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};


