import { prisma } from "./prisma.js";

try {
  await prisma.$connect();

  const result = await prisma.$queryRaw`SELECT 1`;

  console.log("PostgreSQL connection successful!");
  console.log("Database query result:", result);
} catch (error) {
  console.error("Database connection failed:", error);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
