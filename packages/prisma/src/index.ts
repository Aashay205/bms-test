import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/prisma/client'
import type { PrismaClient as PrismaClientType } from './generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const client: PrismaClientType = new PrismaClient({ adapter })

export { client }