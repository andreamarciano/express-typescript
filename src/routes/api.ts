import { Router, Request, Response } from "express";
import { people } from "../data/people";

const router = Router();

router.get("/people", (req: Request, res: Response): void => {
  res.json(people);
});

router.post("/people", (req: Request, res: Response): void => {
  console.log("Received body:", req.body);

  const person = req.body;
  people.push(person);
  res.status(200).json({ success: true, data: people });
});

export default router;
