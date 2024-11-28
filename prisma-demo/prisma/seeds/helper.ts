import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const execute = (
  count = 1,
  callback: (prisma: PrismaClient) => PromiseLike<unknown>,
) => {
  return Promise.all(Array.from({ length: count }).map(() => callback(prisma)));
};
