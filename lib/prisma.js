import { PrismaPg } from "@prisma/adapter-pg"; 
import { Pool } from "pg";
import { PrismaClient } from "./generated/prisma/client";

const globaForPrisma = globalThis;

function createPrismaClient() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL })
    const adapter = new PrismaPg(pool);
    return new PrismaClient({ adapter })
}

export const db = globaForPrisma.prisma ?? createPrismaClient();

if(process.env.NODE_ENV !== "production") globaForPrisma.prisma = db;
