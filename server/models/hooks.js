// Hook that sets statusCode for mongoose schema validation error (default error has no statusCode)
export const handleSaveError = (error, data, next) => {
  error.statusCode = 400;
  next();
};

// Hook that forces object validation before updating MongoDB document and sets updated document as return value (as default findOneAndUprate does not trigger validation and returns pre-update document)
export const runValidationOnUpdate = function (next) {
  this.options.runValidators = true;
  this.options.returnDocument = "after";
  next();
};
