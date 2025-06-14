import express, { Request, Response } from "express";
import session from "express-session";
import path from "path"; // os compatibility

import logger from "./middleware/logger";
import apiRoutes from "./routes/api";
import pageRoutes from "./routes/pages";
import authRoutes from "./routes/auth";

const app = express();
const PORT: number = 3000;

const publicPath = path.join(__dirname, "public");

/* Middleware */
app.use(express.json());
app.use(
  session({
    secret: "super-secret-key", // metti qualcosa di sicuro
    resave: false,
    saveUninitialized: false,
  })
);
app.use(logger);
app.use("/static", express.static(publicPath));

/* Website Routes */
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);
app.use("/", pageRoutes);

/* 404 handler */
app.use((req: Request, res: Response): void => {
  res.status(404).sendFile("404.html", { root: publicPath });
});

/* Server start */
app.listen(PORT, (): void => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
