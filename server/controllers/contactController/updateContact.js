import { isValidObjectId } from "mongoose";
import { HttpError } from "../../helpers/index.js";
import { Contact } from "../../models/index.js";
import { createContactJoiSchema } from "../../schemas/index.js";

const updateContact = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length) {
      throw HttpError(400, "Request body is empty");
    }

    const { error } = createContactJoiSchema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }

    const id = req.params.id;

    if (!isValidObjectId(id)) {
      throw HttpError(404, `'${id}' is not valid database ID`);
    }

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
  } catch (error) {
    next(error);
  }
};

export default updateContact;
