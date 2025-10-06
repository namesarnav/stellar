import { Request, Response } from "express";

function loginController(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  } else if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email format" });
  } else if (password.length < 8) {
    return res
      .status(400)
      .json({ error: "Password must be at least 8 characters long" });
  }
}
