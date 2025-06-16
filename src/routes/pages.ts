import { Router, Request, Response } from "express";
import path from "path";

const router = Router();
const publicPath = path.join(__dirname, "../../public");

// Home
router.get("/", (req: Request, res: Response): void => {
  res.sendFile("homepage.html", { root: publicPath });
});

// People
router.get("/people", (req: Request, res: Response): void => {
  res.sendFile("people.html", { root: publicPath });
});

// About
router.get("/about", (req: Request, res: Response): void => {
  res.sendFile("about.html", { root: publicPath });
});

// Contacts
router.get("/contact", (req: Request, res: Response): void => {
  res.sendFile("contact.html", { root: publicPath });
});

export default router;
