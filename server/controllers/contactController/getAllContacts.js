import { Contact } from "../../models/index.js";

const getAllContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.status(200);
    res.json({
      status: "Success",
      statusCode: 200,
      data: result,
      total: result.length,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllContacts;
