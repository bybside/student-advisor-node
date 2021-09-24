/*
  Warnings:

  - You are about to drop the column `gpa` on the `Student` table. All the data in the column will be lost.
  - Added the required column `cumulativeGpa` to the `StudentSnapshot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "gpa";

-- AlterTable
ALTER TABLE "StudentSnapshot" ADD COLUMN     "cumulativeGpa" REAL NOT NULL;
