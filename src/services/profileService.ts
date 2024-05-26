import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProfiles = async (userId: number) => {

  console.log('userId', userId);
  const profiles = await prisma.profile.findMany({
    where: {
      userId: { not: userId },
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
