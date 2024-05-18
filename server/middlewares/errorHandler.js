const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Server error";

  res.status(statusCode);
  res.json({
    status: "Error",
    statusCode,
    message,
    error:
      process.env.NODE_ENV === "development"
        ? { stack: err.stack, ...err, timestamp: new Date().toString() }
        : undefined,
  });
  next(err);
};

export default errorHandler;
