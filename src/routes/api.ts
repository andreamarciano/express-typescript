import { Router, Request, Response } from "express";
import { people } from "../data/people";

const router = Router();

router.get("/people", (req: Request, res: Response): void => {
  res.json(people);
});

export default router;
