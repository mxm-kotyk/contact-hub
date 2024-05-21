import express from "express";
import * as contactController from "../../controllers/contactController/index.js";

const contactsRouter = express.Router();

// Get all contacts
contactsRouter.get("/", contactController.getAllContacts);

// Get one contact by id
contactsRouter.get("/:id", contactController.getOneContact);

// Add contact
contactsRouter.post("/", contactController.createContact);

// Update contact
contactsRouter.put("/:id", contactController.updateContact);

// Delete contact
contactsRouter.delete("/:id", contactController.deleteContact);

export default contactsRouter;
