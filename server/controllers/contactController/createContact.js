import HttpError from "../../helpers/HttpError.js";
import { Contact } from "../../models/index.js";
import { createContactJoiSchema } from "../../schemas/index.js";

const createContact = async (req, res, next) => {
  try {
    if (!Object.keys(req.body).length) {
      throw HttpError(400, "Request body is empty");
    }

    const { error } = createContactJoiSchema.validate(req.body);

    if (error) {
      throw HttpError(400, error.message);
    }

    const result = await Contact.create(req.body);
    res.status(201);
    res.json({
      status: "Success",
      statusCode: 201,
      message: "Contact successfully created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default createContact;
