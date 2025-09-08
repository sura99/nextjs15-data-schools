
// import { PrismaClient } from '@prisma/client'  // ใช้แล้ว error
import { PrismaClient } from "../generated/prisma"  //อันนี้ดี

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma