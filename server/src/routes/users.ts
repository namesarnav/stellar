import { Router, Request, Response } from "express";

const router = Router();

// in-memory store for now
const users: { id: number; name: string }[] = [];

router.get("/", (req: Request, res: Response) => {
  res.json(users);
});

router.post("/", (req: Request, res: Response) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;
