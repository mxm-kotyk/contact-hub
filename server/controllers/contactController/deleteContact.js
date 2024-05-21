import { isValidObjectId } from "mongoose";
import { HttpError } from "../../helpers/index.js";
import { Contact } from "../../models/index.js";

const deleteContact = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
      throw HttpError(404, `'${id}' is not valid database ID`);
    }

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
  } catch (error) {
    next(error);
  }
};

export default deleteContact;
