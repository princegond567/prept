/*
  Warnings:

  - You are about to drop the column `crditRate` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "crditRate",
ADD COLUMN     "creditRate" INTEGER NOT NULL DEFAULT 1;
