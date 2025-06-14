import express, { Request, Response } from "express";
import path from "path"; // os compatibility

import logger from "./middleware/logger";

const app = express();
const PORT: number = 3000;

/* Middleware */
app.use(logger);
app.use(express.static(path.join(__dirname, "public"))); // Serves all files in the "public" folder

/* Routes */

// Home
app.get("/", (req: Request, res: Response): void => {
  res.sendFile("homepage.html", { root: path.join(__dirname, "public") });
});

// People
app.get("/people", (req: Request, res: Response): void => {
  res.sendFile("people.html", { root: path.join(__dirname, "public") });
});

// About
app.get("/about", (req: Request, res: Response): void => {
  res.sendFile("about.html", { root: path.join(__dirname, "public") });
});

// Contacts
app.get("/contact", (req: Request, res: Response): void => {
  res.sendFile("contact.html", { root: path.join(__dirname, "public") });
});

/* 404 handler - Undefined Routes */
app.use((req: Request, res: Response): void => {
  res
    .status(404)
    .sendFile("404.html", { root: path.join(__dirname, "public") });
});

/* Server start */
app.listen(PORT, (): void => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
