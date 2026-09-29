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
app.get("/users", async (_, res) => {
  // const users = await prisma.user.findFirst()
  // const users = await prisma.user.findFirstOrThrow()
  // const users = await prisma.user.findMany();
  // const users = await prisma.user.findUnique({
  //     where: {email: "sara@example.com"}
  // });
  // const users = await prisma.user.findMany({
  //     where: {isMarried : true, age: {gt: 30}},
  // });
  // const users = await prisma.user.findMany({
  //   where: {
  //     AND: [
  //       {nationality: "American"},
  //       {
  //         age: {gt: 30 }
  //       }
  //     ]
  //   }
  // })
  // const users = await prisma.user.findMany({
  //   where: {
  //     nationality: { not: "American" },
  //   },
  // });
  const users = await prisma.user.findMany({
    where: {
      nationality: { 
          in: ["British", "Japanese", "Pakistani"]
       },
    },
  });
  res.json(users);
});


app.put("/users", async(_, res) =>{
  const updateUser = await prisma.user.update({
    where: {email:"ayesha.khan@example.com"},
    data: {
      age: 20,
      isMarried: false
    }
  });

  res.status(200).json({
    message: "User updated successfully.",
    user: updateUser,
  });
})

app.delete("/users", async(_, res) =>{
  const deleteUser = await prisma.user.delete({
    where: {email: "sadia.rahman@example.com"}
  })

  res.status(200).json({
    message: "user deleted successfully.",
    user: deleteUser,
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
