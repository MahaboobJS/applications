import { Prisma, PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const logLevels = process.env['PRISMA_LOG_LEVELS']?.split(',') as Prisma.LogLevel[];

const prisma =
  global.prisma ||
  new PrismaClient({
    log: logLevels,
  });

if (process.env['NODE_ENV'] !== 'production') {
  global.prisma = prisma;
}

export const getPrismaClient = () => prisma;
