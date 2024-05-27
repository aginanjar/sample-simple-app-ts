import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateUserInput {
  email: string;
  password: string;
}

export interface UserOutput {
  id: number;
  email: string;
  password: string;
  isPremium: boolean;
  createdAt: Date;
}

export const createUser = async (data: CreateUserInput): Promise<UserOutput> => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

export const findUserByEmail = async (email: string): Promise<UserOutput | null> => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
};

export const findUserById = async (id: number): Promise<UserOutput | null> => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

export const updateUser = async (id: number, data: Partial<CreateUserInput>): Promise<UserOutput> => {
  const user = await prisma.user.update({
    where: { id },
    data,
  });
  return user;
};
