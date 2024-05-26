import { Request, Response } from 'express';
import { purchasePackage } from '../services/purchaseService';

interface RequestWithUser extends Request {
  user: any; // Add 'user' property to Request interface
}

export const purchase = async (req: Request, res: Response) => {
  try {
    const purchaseResult = await purchasePackage( (req as RequestWithUser).user.id, req.body.package);
    res.status(200).json(purchaseResult);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
