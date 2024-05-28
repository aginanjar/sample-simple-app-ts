import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export const getUserDetail = async (userId: number) => {

  const profiles = await prisma.user.findMany({
    where: {
      id: userId,
    },
    take: 10,
    select: {
      email: true,
      isPremium: true,
    },
  });
  return profiles;
};
