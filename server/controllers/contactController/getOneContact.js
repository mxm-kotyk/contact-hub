import { Contact } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";
import { asyncWrapper } from "../../decorators/index.js";

// Get one contact by id
// GET api/contacts/:id
const getOneContact = async (req, res) => {
  const id = req.params.id;

  const result = await Contact.findById(id);

  if (!result) {
    throw HttpError(
      404,
      `The contact with the ID '${id}' does not exists in database`
    );
  }

  res.status(200);
  res.json({
    status: "Success",
    statusCode: 200,
    data: result,
  });
};

export default asyncWrapper(getOneContact);
