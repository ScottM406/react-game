const prisma = require('../prisma');
const races = require('./seed-data/races.js');
const characterBackgrounds = require('./seed-data/character-backgrounds.js');

const seed = async () => {

  for (const raceData of races) {
    const { ...raceDetails }  = raceData;
    await prisma.race.create({
      data: {
        ...raceDetails
      }
    });
  }

  for (const characterBackgroundData of characterBackgrounds) {
    const { ...characterBackgroundDetails } = characterBackgroundData;
    await prisma.characterBackground.create({
      data: {
        ...characterBackgroundDetails
      }
    });
  }
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });