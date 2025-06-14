import { Router, Request, Response } from "express";
import { users } from "../auth/auth";

const router = Router();

// Login
router.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  req.session.user = user;
  res.json({
    message: "Login successful",
    user: { username: user.username, role: user.role },
  });
});

// Logout
router.post("/logout", (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.json({ message: "Logged out" });
  });
});

export default router;
