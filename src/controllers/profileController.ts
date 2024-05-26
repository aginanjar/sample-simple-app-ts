import { Request, Response } from 'express';
import { getProfiles, swipeProfile } from '../services/profileService';

interface RequestWithUser extends Request {
  user: any; // Add 'user' property to Request interface
}

export const getProfile = async (req: Request, res: Response) => {
  try {
    console.log((req as RequestWithUser).user);
    const profiles = await getProfiles( (req as RequestWithUser).user.id);
    res.status(200).json(profiles);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const swipe = async (req: Request, res: Response) => {
  try {
    const swipeResult = await swipeProfile( (req as RequestWithUser).user.id, req.body.profileId, req.body.action);
    res.status(200).json(swipeResult);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
