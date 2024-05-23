import { Contact } from "../../models/index.js";
import { asyncWrapper } from "../../decorators/index.js";

// Add new contact
// POST api/contacts
const createContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201);
  res.json({
    status: "Success",
    statusCode: 201,
    message: "Contact successfully created",
    data: result,
  });
};

export default asyncWrapper(createContact);
