import Joi from "joi";

export const createContactJoiSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "'name' cannot be empty.",
    "any.required": "'name' is a required field",
  }),
  phoneNumber: Joi.string(),
  email: Joi.string(),
  favorite: Joi.boolean(),
});

export const setContactFavoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "'favorite' is a required field",
  }),
});
