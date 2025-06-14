import { Request, Response, NextFunction } from "express";

// 200 OK - 304 Not Modified (Cache) - 404 Not Found
function logger(req: Request, res: Response, next: NextFunction): void {
  const start: number = Date.now();

  res.on("finish", () => {
    const duration: number = Date.now() - start;
    console.log(
      `${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`
    );
  });

  next();
}

export default logger;
