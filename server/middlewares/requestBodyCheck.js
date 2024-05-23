import { HttpError } from "../helpers/index.js";

// This middleware checks if request body is not an empty object before request reaches controller
const requestBodyCheck = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    return next(HttpError(400, "Request body is empty"));
  }

  next();
};

export default requestBodyCheck;
