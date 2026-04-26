import { PrismaClient } from './generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
  var pool: Pool | undefined;
}

function getPrismaClient() {
  if (global.prisma) {
    return global.prisma;
  }

  // Only create pool and adapter if DATABASE_URL exists
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  if (!global.pool) {
    global.pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }

  const adapter = new PrismaPg(global.pool);
  const client = new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === 'development'
        ? ['error', 'warn']
        : ['error'],
  });

  if (process.env.NODE_ENV !== 'production') {
    global.prisma = client;
  }

  return client;
}

export const prisma = global.prisma || getPrismaClient();
