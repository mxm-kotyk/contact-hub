import { HttpError } from "../../helpers/index.js";
import { Contact } from "../../models/index.js";
import { asyncWrapper } from "../../decorators/index.js";

// Update contact by id
// PUT api/contacts/:id
const updateContact = async (req, res) => {
  const id = req.params.id;

  const result = await Contact.findByIdAndUpdate(id, req.body, {
    returnDocument: "after",
  });

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
    message: `Contact with id ${id} was successfully updated`,
    data: result,
  });
};

export default asyncWrapper(updateContact);
