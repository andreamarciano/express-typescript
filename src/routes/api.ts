import { Router, Request, Response } from "express";
import { people } from "../data/people";

const router = Router();

// Get people
router.get("/people", (req: Request, res: Response): void => {
  res.json(people);
});

// Add person
router.post("/people", (req: Request, res: Response): void => {
  console.log("Received body:", req.body);

  const person = req.body;
  people.push(person);
  res.status(200).json({ success: true, data: people });
});

// Modify person
router.put("/people/:id", (req: Request, res: Response): void => {
  const { id } = req.params;
  const personId = Number(id);

  const index = people.findIndex((p) => p.id === personId);

  if (index === -1) {
    res.status(400).json({ success: false, message: "Person not found" });
    return;
  }

  people[index] = { ...people[index], ...req.body };

  res.status(200).json({ success: true, data: people[index] });
});

// Delete person
router.delete("/people/:id", (req: Request, res: Response): void => {
  const { id } = req.params;
  const { name } = req.body;

  const personId = Number(id);
  const index = people.findIndex((p) => p.id === personId && p.name === name);

  if (index === -1) {
    res.status(400).json({
      success: false,
      message: "No person found with matching ID and name",
    });
    return;
  }

  const removed = people.splice(index, 1)[0];

  res.status(200).json({ success: true, data: removed });
});

export default router;
