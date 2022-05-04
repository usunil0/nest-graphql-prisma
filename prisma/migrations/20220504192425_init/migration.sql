/*
  Warnings:

  - You are about to alter the column `arrivalTime` on the `Plane` table. The data in that column could be lost. The data in that column will be cast from `DateTime` to `Int`.
  - You are about to alter the column `departureTime` on the `Plane` table. The data in that column could be lost. The data in that column will be cast from `DateTime` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plane" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "arrivalAirportId" INTEGER NOT NULL,
    "departureAirportId" INTEGER NOT NULL,
    "arrivalTime" INTEGER NOT NULL,
    "departureTime" INTEGER NOT NULL,
    CONSTRAINT "Plane_arrivalAirportId_fkey" FOREIGN KEY ("arrivalAirportId") REFERENCES "Airport" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Plane_departureAirportId_fkey" FOREIGN KEY ("departureAirportId") REFERENCES "Airport" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Plane" ("arrivalAirportId", "arrivalTime", "departureAirportId", "departureTime", "id", "name") SELECT "arrivalAirportId", "arrivalTime", "departureAirportId", "departureTime", "id", "name" FROM "Plane";
DROP TABLE "Plane";
ALTER TABLE "new_Plane" RENAME TO "Plane";
CREATE UNIQUE INDEX "Plane_name_key" ON "Plane"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
