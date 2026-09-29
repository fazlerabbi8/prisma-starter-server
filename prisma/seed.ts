import { prisma } from "../lib/prisma";

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Arif Hasan",
        email: "arif.hasan@example.com",
        age: 24,
        isMarried: false,
        nationality: "Bangladeshi",
      },
      {
        name: "Nusrat Jahan",
        email: "nusrat.jahan@example.com",
        age: 27,
        isMarried: true,
        nationality: "Bangladeshi",
      },
      {
        name: "Tanvir Ahmed",
        email: "tanvir.ahmed@example.com",
        age: 31,
        isMarried: true,
        nationality: "Bangladeshi",
      },
      {
        name: "Sadia Rahman",
        email: "sadia.rahman@example.com",
        age: 22,
        isMarried: false,
        nationality: "Bangladeshi",
      },
      {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        age: 35,
        isMarried: true,
        nationality: "American",
      },
      {
        name: "Emma Wilson",
        email: "emma.wilson@example.com",
        age: 29,
        isMarried: false,
        nationality: "British",
      },
      {
        name: "Kenji Tanaka",
        email: "kenji.tanaka@example.com",
        age: 26,
        isMarried: false,
        nationality: "Japanese",
      },
      {
        name: "Ayesha Khan",
        email: "ayesha.khan@example.com",
        age: 30,
        isMarried: true,
        nationality: "Pakistani",
      },
      {
        name: "Daniel Müller",
        email: "daniel.muller@example.com",
        age: 33,
        isMarried: true,
        nationality: "German",
      },
      {
        name: "Sofia Garcia",
        email: "sofia.garcia@example.com",
        age: 25,
        isMarried: false,
        nationality: "Spanish",
      },
    ],
    skipDuplicates: true,
  });
  console.log("Seeding done");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
