-- CreateTable
CREATE TABLE "Verify" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "code" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Gender" (
    "value" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "imageId" INTEGER,
    "gender" TEXT,
    "birthday" DATETIME,
    CONSTRAINT "User_gender_fkey" FOREIGN KEY ("gender") REFERENCES "Gender" ("value") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "User_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserFilmStatus" (
    "value" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserFilm" (
    "filmId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "notification" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,

    PRIMARY KEY ("filmId", "userId"),
    CONSTRAINT "UserFilm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserFilm_status_fkey" FOREIGN KEY ("status") REFERENCES "UserFilmStatus" ("value") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserFilm_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserTicketStatus" (
    "value" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserTicket" (
    "userId" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "ticketId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "ticketId"),
    CONSTRAINT "UserTicket_filmId_userId_fkey" FOREIGN KEY ("filmId", "userId") REFERENCES "UserFilm" ("filmId", "userId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserTicket_status_fkey" FOREIGN KEY ("status") REFERENCES "UserTicketStatus" ("value") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserTicket_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "path" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shortTitle" TEXT NOT NULL,
    "dateStart" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "FilmActor" (
    "filmId" INTEGER NOT NULL,
    "actorId" INTEGER NOT NULL,
    "position" TEXT NOT NULL,

    PRIMARY KEY ("filmId", "actorId"),
    CONSTRAINT "FilmActor_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "FilmActor_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmGenre" (
    "filmId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    PRIMARY KEY ("filmId", "genreId"),
    CONSTRAINT "FilmGenre_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "FilmGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmImage" (
    "filmId" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,

    PRIMARY KEY ("filmId", "imageId"),
    CONSTRAINT "FilmImage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "FilmImage_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Actor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageId" INTEGER,
    CONSTRAINT "Actor_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CinemaHall" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "timeOpen" DATETIME NOT NULL,
    "timeClose" DATETIME NOT NULL,
    "contact" TEXT
);

-- CreateTable
CREATE TABLE "Place" (
    "code" TEXT NOT NULL PRIMARY KEY,
    "cinemaHallId" INTEGER NOT NULL,
    CONSTRAINT "Place_cinemaHallId_fkey" FOREIGN KEY ("cinemaHallId") REFERENCES "CinemaHall" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "sessionTimeStart" DATETIME NOT NULL,
    "sessionTimeEnd" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "cinemaHallId" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,
    CONSTRAINT "Session_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Session_cinemaHallId_fkey" FOREIGN KEY ("cinemaHallId") REFERENCES "CinemaHall" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Session_status_fkey" FOREIGN KEY ("status") REFERENCES "SessionStatus" ("value") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SessionStatus" (
    "value" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cost" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "sessionId" INTEGER NOT NULL,
    CONSTRAINT "Ticket_code_fkey" FOREIGN KEY ("code") REFERENCES "Place" ("code") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Ticket_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Ticket_status_fkey" FOREIGN KEY ("status") REFERENCES "TicketStatus" ("value") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TicketStatus" (
    "value" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "NotificationType" (
    "value" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "content" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Notification_type_fkey" FOREIGN KEY ("type") REFERENCES "NotificationType" ("value") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Gender_value_key" ON "Gender"("value");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "UserFilmStatus_value_key" ON "UserFilmStatus"("value");

-- CreateIndex
CREATE UNIQUE INDEX "UserTicketStatus_value_key" ON "UserTicketStatus"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Film_id_key" ON "Film"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Film_shortTitle_key" ON "Film"("shortTitle");

-- CreateIndex
CREATE UNIQUE INDEX "CinemaHall_name_key" ON "CinemaHall"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CinemaHall_adress_key" ON "CinemaHall"("adress");

-- CreateIndex
CREATE UNIQUE INDEX "Place_code_key" ON "Place"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SessionStatus_value_key" ON "SessionStatus"("value");

-- CreateIndex
CREATE UNIQUE INDEX "TicketStatus_value_key" ON "TicketStatus"("value");

-- CreateIndex
CREATE UNIQUE INDEX "NotificationType_value_key" ON "NotificationType"("value");
