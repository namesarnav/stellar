import express from "express";
import healthRouter from "./routes/health";
import usersRouter from "./routes/users";

const app = express();
const PORT = 3000;

app.use(express.json()); // parse JSON

// // routes
app.use("/health", healthRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
