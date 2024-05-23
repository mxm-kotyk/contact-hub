import { HttpError } from "../helpers/index.js";

// This decorator returns middleware that validates request body using provided schema before request reaches controller
const validateRequestBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return next(HttpError(400, error.message));
    }

    next();
  };

  return func;
};

export default validateRequestBody;
