import { Contact } from "../../models/index.js";
import { asyncWrapper } from "../../decorators/index.js";

// Get all contacts
// GET api/contacts
const getAllContacts = async (req, res) => {
  const result = await Contact.find(req.query);
  const totalCount = await Contact.estimatedDocumentCount();
  const favoritesCount = await Contact.countDocuments({
    favorite: true,
  });
  console.log(totalCount);
  res.status(200);
  res.json({
    status: "Success",
    statusCode: 200,
    data: {
      contacts: result,
      counts: {
        total: totalCount,
        favorite: favoritesCount,
      },
    },
  });
};

export default asyncWrapper(getAllContacts);
