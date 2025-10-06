import { Request, Response } from "express";

async function login(req: Request, res: Response) {
  // Your login logic here
  let user = req.body.user;

  if (user.email && user.password) {
  }
}

function logout(req: Request, res: Response) {
  // Your logout logic here
}

function register(req: Request, res: Response) {
  // Your register logic here
}

export { login, logout, register };
