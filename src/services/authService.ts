import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser as add, CreateUserInput, findUserByEmail } from '../models/user';


export const createUser = async (data: { email: string; password: string }) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const payload: CreateUserInput = {
    email: data.email,
    password: hashedPassword,
  };

  return add(payload);
};

export const loginUser = async (data: { email: string; password: string }) => {
  const user = await findUserByEmail(data.email);
  if (!user) throw new Error('Invalid email or password');

  const isPasswordValid = await bcrypt.compare(data.password, user.password);
  if (!isPasswordValid) throw new Error('Invalid email or password');

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1d' });
  return token;
};
