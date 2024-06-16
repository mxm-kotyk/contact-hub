import { Contact } from "../../models/index.js";
import { asyncWrapper } from "../../decorators/index.js";

// Get all contacts
// GET api/contacts
const getAllContacts = async (req, res) => {
  const result = await Contact.find(req.query);
  res.status(200);
  res.json({
    status: "Success",
    statusCode: 200,
    data: result,
    total: result.length,
  });
};

export default asyncWrapper(getAllContacts);
