import { HttpError } from "../../helpers/index.js";
import { Contact } from "../../models/index.js";

// Change contact's "favorite" field
const setFavoriteContact = async (req, res) => {
  const id = req.params.id;

  const result = await Contact.findByIdAndUpdate(id, req.body);

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

export default setFavoriteContact;
