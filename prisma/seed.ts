import { prisma } from "../lib/prisma";

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Ali", email: "ali@example.com" },
      { name: "Sara", email: "sara@example.com" },
      { name: "Rahim", email: "rahim@example.com" },
    ],
    skipDuplicates: true,
  });
  console.log("Seeding done");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());