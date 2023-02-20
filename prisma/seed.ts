import { prisma } from "../src/server/db";

async function main() {
  await prisma.weapon.upsert({
    where: {
      id: 1,
    },
    create: {
      id: 1,
      name: 'rock'
    },
    update: {},
  });

  await prisma.weapon.upsert({
    where: {
      id: 2,
    },
    create: {
      id: 2,
      name: 'paper'
    },
    update: {},
  });

  await prisma.weapon.upsert({
    where: {
      id: 3,
    },
    create: {
      id: 3,
      name: 'scissors'
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
