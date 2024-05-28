import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export const getProfiles = async (userId: number) => {

  const profiles = await prisma.user.findMany({
    where: {
      id: {
        not: userId,
      },
    },
    take: 10,
  });
  return profiles;
};

export const swipeProfile = async (userId: number, profileId: number, action: 'like' | 'pass') => {
  return prisma.swipe.create({
    data: {
      userId,
      profileId,
      action,
    },
  });
};
