import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  // ... you will write your Prisma Client queries here
  const allBarberShops = prisma.barber_shops.findMany();
  console.log(allBarberShops);
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
