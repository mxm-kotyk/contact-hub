import { isValidObjectId } from "mongoose";
import { HttpError } from "../helpers/index.js";

// This middleware checks if id in request parameters is valid MongoDB object id before request reaches controller
const validIdCheck = (req, res, next) => {
  const id = req.params.id;

  if (!isValidObjectId(id)) {
    return next(HttpError(404, `'${id}' is not valid database ID`));
  }

  next();
};

export default validIdCheck;
