-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameSave" (
    "id" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "GameSave_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "gameSaveID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "raceID" TEXT NOT NULL,
    "backgroundID" TEXT NOT NULL,
    "hitPoints" INTEGER NOT NULL,
    "abilityPoints" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL,
    "ingenuity" INTEGER NOT NULL,
    "agility" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "perception" INTEGER NOT NULL,
    "armor" INTEGER NOT NULL,
    "attackPowerMelee" INTEGER NOT NULL,
    "attackPowerRanged" INTEGER NOT NULL,
    "battleLuck" INTEGER NOT NULL,
    "planetLuck" INTEGER NOT NULL,
    "spaceLuck" INTEGER NOT NULL,
    "karma" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("gameSaveID")
);

-- CreateTable
CREATE TABLE "Ship" (
    "id" INTEGER NOT NULL,
    "gameSaveID" INTEGER NOT NULL,
    "hullHealth" INTEGER NOT NULL,
    "navFuntion" INTEGER NOT NULL,
    "commFunction" INTEGER NOT NULL,
    "attackPower" INTEGER NOT NULL,
    "cargoCapacity" INTEGER NOT NULL,
    "kenels" INTEGER NOT NULL,

    CONSTRAINT "Ship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" INTEGER NOT NULL,
    "gameSaveID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "hitPoints" INTEGER NOT NULL,
    "attackPower" INTEGER NOT NULL,
    "battleLuck" INTEGER NOT NULL,
    "planetLuck" INTEGER NOT NULL,
    "affection" INTEGER NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Race" (
    "name" TEXT NOT NULL,
    "homePlanet" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "maxSpeed" INTEGER NOT NULL,
    "strengthBonus" INTEGER NOT NULL,
    "charismaBonus" INTEGER NOT NULL,
    "ingenuityBonus" INTEGER NOT NULL,
    "agilityBonus" INTEGER NOT NULL,
    "constitutionBonus" INTEGER NOT NULL,
    "perceptionBonus" INTEGER NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "CharacterBackground" (
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "strengthBonus" INTEGER NOT NULL,
    "charismaBonus" INTEGER NOT NULL,
    "ingenuityBonus" INTEGER NOT NULL,
    "agilityBonus" INTEGER NOT NULL,
    "constitutionBonus" INTEGER NOT NULL,
    "perceptionBonus" INTEGER NOT NULL,

    CONSTRAINT "CharacterBackground_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Character_gameSaveID_key" ON "Character"("gameSaveID");

-- AddForeignKey
ALTER TABLE "GameSave" ADD CONSTRAINT "GameSave_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_gameSaveID_fkey" FOREIGN KEY ("gameSaveID") REFERENCES "GameSave"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_raceID_fkey" FOREIGN KEY ("raceID") REFERENCES "Race"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundID_fkey" FOREIGN KEY ("backgroundID") REFERENCES "CharacterBackground"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ship" ADD CONSTRAINT "Ship_gameSaveID_fkey" FOREIGN KEY ("gameSaveID") REFERENCES "GameSave"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_gameSaveID_fkey" FOREIGN KEY ("gameSaveID") REFERENCES "GameSave"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
