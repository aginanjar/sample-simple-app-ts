import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const purchasePackage = async (userId: number, packageType: string) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { isPremium: true },
  });
  return prisma.purchase.create({
    data: {
      userId,
      package: packageType,
    },
  });
};
