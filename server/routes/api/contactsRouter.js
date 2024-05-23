import express from "express";
import * as contactController from "../../controllers/contactController/index.js";
import { validateRequestBody } from "../../decorators/index.js";
import {
  createContactJoiSchema,
  setContactFavoriteJoiSchema,
} from "../../schemas/index.js";
import { requestBodyCheck, validIdCheck } from "../../middlewares/index.js";

const contactsRouter = express.Router();
const validateBodyMiddleware = validateRequestBody(createContactJoiSchema);
const validateFavoriteUpdateMiddleware = validateRequestBody(
  setContactFavoriteJoiSchema
);

// Get all contacts
contactsRouter.get("/", contactController.getAllContacts);

// Get one contact by id
contactsRouter.get("/:id", validIdCheck, contactController.getOneContact);

// Add contact
contactsRouter.post(
  "/",
  requestBodyCheck,
  validateBodyMiddleware,
  contactController.createContact
);

// Update contact
contactsRouter.put(
  "/:id",
  validIdCheck,
  requestBodyCheck,
  validateBodyMiddleware,
  contactController.updateContact
);

// Delete contact
contactsRouter.delete("/:id", validIdCheck, contactController.deleteContact);

// Set favorite contact
contactsRouter.patch(
  "/:id/favorite",
  validateFavoriteUpdateMiddleware,
  contactController.setFavoriteContact
);

export default contactsRouter;
