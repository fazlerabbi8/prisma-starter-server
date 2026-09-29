import express from "express";
import { prisma } from "./lib/prisma";
const app = express();

const PORT = 5000;

// server connection
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

// getting user
app.get("/users", async(_, res) =>{
    // const users = await prisma.user.findFirst()
    // const users = await prisma.user.findFirstOrThrow()
    // const users = await prisma.user.findMany();
    // const users = await prisma.user.findUnique({
    //     where: {email: "sara@example.com"}
    // });
    // const users = await prisma.user.findMany({
    //     where: {isMarried : true, age: {gt: 30}},
    // });
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {nationality: "American"},
          {
            age: {gte: 30 }
          }
        ]
      }
    })
    res.json(users);
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});