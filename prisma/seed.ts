import { prisma } from "../src/server/db";

async function main() {
  const weapons = [
    {name: 'rock'},
    {name: 'paper'},
    {name: 'scissors'},
  ]

    await prisma.weapon.upsert({
      where: {
        name: 'rock',
      },
      create: {
        name: 'rock'
      },
      update: {},
    });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
