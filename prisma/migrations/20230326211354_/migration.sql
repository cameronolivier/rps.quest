/*
  Warnings:

  - You are about to drop the `Fight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Round` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Weapon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `userId` on the `Game` table. All the data in the column will be lost.
  - Added the required column `slug` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Fight";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Round";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Weapon";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Game" ("createdAt", "id") SELECT "createdAt", "id" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
CREATE UNIQUE INDEX "Game_slug_key" ON "Game"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
