import Joi from "joi";

const createContactJpiSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "'name' cannot be an empty string.",
    "any.required": "'name' is a required field",
  }),
  phoneNumber: Joi.string(),
  email: Joi.string(),
});

export default createContactJpiSchema;
