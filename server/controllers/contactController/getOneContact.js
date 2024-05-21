import { isValidObjectId } from "mongoose";
import { Contact } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";

const getOneContact = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
      throw HttpError(404, `'${id}' is not valid database ID`);
    }

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
  } catch (error) {
    next(error);
  }
};

export default getOneContact;
