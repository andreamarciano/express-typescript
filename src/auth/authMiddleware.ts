import { Request, Response, NextFunction } from "express";
import { User } from "./auth";

declare module "express-session" {
  interface SessionData {
    user?: User;
  }
}

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session.user) return next();
  res.status(401).json({ message: "Not authenticated" });
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.user?.role === "admin") return next();
  res.status(403).json({ message: "Admin access required" });
};

export const isSelfOrAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.session.user;
  const targetId = Number(req.params.id);
  if (!user) return res.status(401).json({ message: "Not authenticated" });

  if (user.role === "admin" || user.personId === targetId) return next();

  res.status(403).json({ message: "Access denied" });
};
