import { Request, Response } from "express";

export async function loginController(req: Request, res: Response) {
  // Your login logic here
  let { email, password } = req.body;

  if (email && password) {
    // Your login logic here
    if (email === "admin@admin.com" && password === "admin123") {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(200).json({ message: "Unauthenticated" });
    }
  } else {
    res.status(400).json({ error: "Invalid email or password" });
  }
}
