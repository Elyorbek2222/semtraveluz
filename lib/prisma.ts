import { PrismaClient } from './generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prismaInstance: PrismaClient | undefined;

export function getPrisma(): PrismaClient {
  if (prismaInstance) return prismaInstance;
  if (global.prisma) return global.prisma;

  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const adapter = new PrismaPg(pool);

  const client = new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === 'development'
        ? ['error', 'warn']
        : ['error'],
  });

  prismaInstance = client;

  if (process.env.NODE_ENV !== 'production') {
    global.prisma = client;
  }

  return client;
}

export const prisma = {
  get blogPost() {
    return getPrisma().blogPost;
  },
  get generationLog() {
    return getPrisma().generationLog;
  },
  get keyword() {
    return getPrisma().keyword;
  },
  get featureFlag() {
    return getPrisma().featureFlag;
  },
  get cronExecution() {
    return getPrisma().cronExecution;
  },
  get translationResult() {
    return getPrisma().translationResult;
  },
  $connect() {
    return getPrisma().$connect();
  },
  $disconnect() {
    return getPrisma().$disconnect();
  },
} as PrismaClient;
