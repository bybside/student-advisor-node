-- CreateTable
CREATE TABLE "CareerFitByOccupation" (
    "totalScore" BIGINT NOT NULL,
    "scoreRank" BIGINT NOT NULL,
    "occupationId" INTEGER NOT NULL,
    "snapshotId" INTEGER NOT NULL,

    CONSTRAINT "CareerFitByOccupation_pkey" PRIMARY KEY ("occupationId","snapshotId")
);

-- AddForeignKey
ALTER TABLE "CareerFitByOccupation" ADD CONSTRAINT "CareerFitByOccupation_occupationId_fkey" FOREIGN KEY ("occupationId") REFERENCES "Occupation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CareerFitByOccupation" ADD CONSTRAINT "CareerFitByOccupation_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "StudentSnapshot"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
