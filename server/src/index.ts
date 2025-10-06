import express from "express";
import healthRouter from "./routes/health";
import usersRouter from "./routes/users";
import loginRouter from "./routes/login";

const app = express();
const PORT = 3000;

app.use(express.json()); // parse JSON

// // routes
app.use("/health", healthRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
  // Render Home Page Here.

  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
