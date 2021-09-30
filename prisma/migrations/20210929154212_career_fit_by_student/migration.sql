-- CreateTable
CREATE TABLE "CareerFitByStudent" (
    "totalScore" BIGINT NOT NULL,
    "scoreRank" BIGINT NOT NULL,
    "studentId" INTEGER NOT NULL,
    "snapshotId" INTEGER NOT NULL,

    CONSTRAINT "CareerFitByStudent_pkey" PRIMARY KEY ("studentId","snapshotId")
);

-- AddForeignKey
ALTER TABLE "CareerFitByStudent" ADD CONSTRAINT "CareerFitByStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CareerFitByStudent" ADD CONSTRAINT "CareerFitByStudent_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "StudentSnapshot"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
