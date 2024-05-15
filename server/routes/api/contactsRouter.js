import express from "express";

const contactsRouter = express.Router();

// Get all contacts
contactsRouter.get("/", (req, res) =>
  res.json({ message: "Get all contacts" })
);

// Get one contact by id
contactsRouter.get("/:id", (req, res) =>
  res.json({ message: "Get one contact by id" })
);

// Add contact
contactsRouter.post("/", (req, res) => res.json({ message: "Add contact" }));

// Update contact
contactsRouter.put("/:id", (req, res) =>
  res.json({ message: "Update contact" })
);

// Delete contact
contactsRouter.delete("/:id", (req, res) =>
  res.json({ message: "Delete contact" })
);

export default contactsRouter;
