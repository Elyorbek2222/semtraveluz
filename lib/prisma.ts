import { PrismaClient } from '../lib/generated/prisma';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const adapter = new PrismaBetterSqlite3({
  url: 'file:./dev.db',
});

export const prisma =
  global.prisma ||
  new PrismaClient({
    adapter,
    log: ['error'],
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
