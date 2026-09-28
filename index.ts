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
    const users = await prisma.user.findFirst()
    res.json(users);
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});