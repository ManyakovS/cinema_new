/*
  Warnings:

  - You are about to alter the column `sessionTimeEnd` on the `Session` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `sessionTimeStart` on the `Session` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sessionTimeStart" DATETIME NOT NULL,
    "sessionTimeEnd" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "cinemaHallId" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,
    CONSTRAINT "Session_status_fkey" FOREIGN KEY ("status") REFERENCES "SessionStatus" ("value") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Session_cinemaHallId_fkey" FOREIGN KEY ("cinemaHallId") REFERENCES "CinemaHall" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Session_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Session" ("cinemaHallId", "createdAt", "filmId", "id", "sessionTimeEnd", "sessionTimeStart", "status", "updatedAt") SELECT "cinemaHallId", "createdAt", "filmId", "id", "sessionTimeEnd", "sessionTimeStart", "status", "updatedAt" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
