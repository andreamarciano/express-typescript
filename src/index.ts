import express, { Request, Response } from "express";
import path from "path"; // os compatibility

const app = express();
const PORT: number = 3000;

// 200 OK - 304 Not Modified (Cache) - 404 Not Found
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
  });
  next();
});

// Serves all files in the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Home
app.get("/", (req: Request, res: Response) => {
  res.sendFile("homepage.html", { root: path.join(__dirname, "public") });
});

// People
app.get("/people", (req: Request, res: Response) => {
  res.sendFile("people.html", { root: path.join(__dirname, "public") });
});

// About
app.get("/about", (req: Request, res: Response) => {
  res.sendFile("about.html", { root: path.join(__dirname, "public") });
});

// Contacts
app.get("/contact", (req: Request, res: Response) => {
  res.sendFile("contact.html", { root: path.join(__dirname, "public") });
});

// Undefined Routes (404)
app.use((req: Request, res: Response) => {
  res
    .status(404)
    .sendFile("404.html", { root: path.join(__dirname, "public") });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
