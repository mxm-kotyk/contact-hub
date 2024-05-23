import { HttpError } from "../../helpers/index.js";
import { Contact } from "../../models/index.js";
import { asyncWrapper } from "../../decorators/index.js";

// Delete contact by id
// DELETE api/contacts/:id
const deleteContact = async (req, res) => {
  const id = req.params.id;

  const result = await Contact.findByIdAndDelete(id);

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
    message: `Contact with ID '${id}' was successfully deleted`,
    data: result,
  });
};

export default asyncWrapper(deleteContact);
