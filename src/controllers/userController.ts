import { Request, Response } from 'express';
import { getUserDetail } from '../services/userService';

interface RequestWithUser extends Request {
  user: any; // Add 'user' property to Request interface
}

export const getDetail = async (req: Request, res: Response) => {
  try {
    const user = await getUserDetail( (req as RequestWithUser).user.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};