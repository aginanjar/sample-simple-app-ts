import jwt from 'jsonwebtoken';

export const generateToken = (user: { id: number; email: string }) => {
  return jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: '1d' });
};
